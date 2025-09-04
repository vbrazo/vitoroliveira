import { useState, useMemo, useEffect } from 'react';

import { ExternalLink } from 'lucide-react';

import Header from '@/design-system/compositions/common/Header';
import Footer from '@/design-system/compositions/common/Footer';
import { posts, tags } from '@/design-system/compositions/common/Blog';

import { Chip, DomainLogo } from '@/features/blog/components';

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState<string>("All");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeTag === "All") return posts;
    
    return posts.filter(post => {
      const category = post.tags.includes(activeTag) ? activeTag : "Other";
      return category === activeTag;
    });
  }, [activeTag]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4 mt-[120px] md:mt-[110px]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center flex-wrap gap-2 mb-10">
            <Chip
              text="All"
              selected={activeTag === "All"}
              setSelected={setActiveTag}
            />
            {tags.map(tag => (
              <Chip
                key={tag}
                text={tag}
                selected={activeTag === tag}
                setSelected={setActiveTag}
              />
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div key={`${post.id}-${post.title}`} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="order-2 md:order-1 flex-1">
                    <div className="mb-1">
                      <a 
                        href={post.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-green-700 hover:underline"
                      >
                        <DomainLogo domain={new URL(post.link).hostname} />
                        {new URL(post.link).hostname.replace('www.', '')}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h2 className="text-xl font-medium text-blue-700 group-hover:underline mb-1">
                        {post.title}
                      </h2>
                    </a>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-2">
                        {post.description}
                      </p>
                      <a 
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-700 hover:underline inline-flex items-center"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 w-full md:w-48 h-48 md:h-32 shrink-0">
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src={post.imgUrl}
                        alt={`Thumbnail for ${post.title}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No articles found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer title="Vitor Oliveira" description="Strategic Leadership in Technology, Product, and Growth" />
    </div>
  );
};

export default BlogPage;
