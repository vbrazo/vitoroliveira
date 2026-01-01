import { CheckCircle2 } from 'lucide-react';
import { Heading, Text } from '@/design-system';
import { parseMarkdown } from '@/lib/parse-markdown';

interface JobContentSectionProps {
  title: string;
  items?: string[];
  content?: string;
  className?: string;
}

export const JobContentSection = ({ title, items, content, className = '' }: JobContentSectionProps) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8 ${className}`}>
      <Heading as="h2" size="xl" className="mb-3 md:mb-4 text-gray-900 text-lg md:text-xl">
        {title}
      </Heading>
      {content && (
        <Text className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
          {parseMarkdown(content)}
        </Text>
      )}
      {items && items.length > 0 && (
        <ul className="space-y-2 md:space-y-3 mt-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 md:gap-3">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <Text className="text-sm md:text-base text-gray-600">
                {parseMarkdown(item)}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
