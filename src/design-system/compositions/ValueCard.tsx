import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Heading, Text } from '@/design-system';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
  delay?: number;
  className?: string;
}

export const ValueCard = ({ 
  icon: Icon, 
  title, 
  description, 
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600',
  delay = 0,
  className = ''
}: ValueCardProps) => {
  return (
    <div className={`text-center p-4 md:p-6 ${className}`}>
      <div className={`w-12 h-12 md:w-16 md:h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
        <Icon className={`h-6 w-6 md:h-8 md:w-8 ${iconColor}`} />
      </div>
      <Heading as="h3" size="lg" className="mb-2 text-gray-900 text-base md:text-lg">
        {title}
      </Heading>
      <Text className="text-sm md:text-base text-gray-600">
        {description}
      </Text>
    </div>
  );
};

