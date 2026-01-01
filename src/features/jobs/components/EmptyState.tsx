import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Heading, Text } from '@/design-system';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

export const EmptyState = ({ title, description, actionLabel, onAction }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm"
    >
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Briefcase className="h-8 w-8 text-gray-400" />
      </div>
      <Heading as="h2" size="xl" className="mb-3 text-gray-900">
        {title}
      </Heading>
      <Text className="text-gray-600 mb-6 max-w-md mx-auto">
        {description}
      </Text>
      <motion.button
        onClick={onAction}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};
