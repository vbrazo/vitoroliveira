import React from 'react';
import { Linkedin, Github, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {

  const handleBlogClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F3F3F3] text-white py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-black mb-4">Vitor Oliveira</div>
            <p className="text-black mb-4 max-w-md">
              Strategic Leadership in Technology, Product, and Growth
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/imvitoroliveira/"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/vbrazo"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                onClick={handleBlogClick}
                href={'/blog'}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-black text-sm">
          &copy; {new Date().getFullYear()} Vitor Oliveira LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
