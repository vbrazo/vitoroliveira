import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Heading, Text } from '@/design-system';

interface DifferentiatorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export const DifferentiatorCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  className = ''
}: DifferentiatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-4 md:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all ${className}`}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
        <Icon className="h-5 w-5 md:h-6 md:w-6 text-black" />
      </div>
      <Heading as="h3" size="lg" className="mb-2 text-gray-900 text-base md:text-lg">
        {title}
      </Heading>
      <Text className="text-sm md:text-base text-gray-600">
        {description}
      </Text>
    </motion.div>
  );
};

