import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Heading, Text } from '@/design-system';

interface ProcessStepProps {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
  index: number;
  className?: string;
}

export const ProcessStep = ({ 
  step, 
  title, 
  subtitle, 
  description, 
  outcome, 
  icon: Icon,
  index,
  className = ''
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-8 md:mb-12 lg:mb-16 last:mb-0 ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center relative z-10">
            <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8 shadow-sm">
          <div className="text-xs md:text-sm text-gray-500 mb-2">STEP {step} {title}</div>
          <Heading as="h3" size="xl" className="mb-2 md:mb-3 text-gray-900 text-lg md:text-xl">
            {subtitle}
          </Heading>
          <Text className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            {description}
          </Text>
          <div className="pt-3 md:pt-4 border-t border-gray-100">
            <Text className="text-xs md:text-sm font-semibold text-gray-900">
              Outcome:
            </Text>
            <Text className="text-xs md:text-sm text-gray-600 mt-1">
              {outcome}
            </Text>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

