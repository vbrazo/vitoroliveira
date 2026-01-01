import { Tag } from 'lucide-react';

interface JobTagsProps {
  tags: string[];
  maxVisible?: number;
  showIcon?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const JobTags = ({ 
  tags, 
  maxVisible = 5, 
  showIcon = false, 
  size = 'sm',
  className = '' 
}: JobTagsProps) => {
  const visibleTags = tags.slice(0, maxVisible);
  const remainingCount = tags.length - maxVisible;

  const sizeClasses = {
    sm: 'px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs',
    md: 'px-2 md:px-3 py-1 text-xs md:text-sm',
  };

  return (
    <div className={`flex flex-wrap gap-1.5 md:gap-2 ${className}`}>
      {visibleTags.map((tag) => (
        <span
          key={tag}
          className={`inline-flex items-center ${sizeClasses[size]} bg-gray-100 text-gray-700 rounded-full font-medium`}
        >
          {showIcon && <Tag className="h-3 w-3 mr-1" />}
          {tag}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className={`inline-flex items-center ${sizeClasses[size]} bg-gray-100 text-gray-600 rounded-full font-medium`}>
          +{remainingCount} more
        </span>
      )}
    </div>
  );
};
