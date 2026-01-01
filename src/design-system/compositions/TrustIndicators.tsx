import { motion } from 'framer-motion';
import { CheckCircle2, LucideIcon } from 'lucide-react';

interface TrustIndicator {
  label: string;
  icon?: LucideIcon;
}

interface TrustIndicatorsProps {
  indicators: TrustIndicator[];
  delay?: number;
  className?: string;
  iconColor?: string;
  textColor?: string;
}

export const TrustIndicators = ({ 
  indicators, 
  delay = 0.2, 
  className = '',
  iconColor = 'text-green-400',
  textColor = 'text-gray-300'
}: TrustIndicatorsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}
    >
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon || CheckCircle2;
        return (
          <div key={index} className={`flex items-center gap-2 text-xs md:text-sm ${textColor}`}>
            <Icon className={`h-3 w-3 md:h-4 md:w-4 ${iconColor}`} />
            <span>{indicator.label}</span>
          </div>
        );
      })}
    </motion.div>
  );
};
