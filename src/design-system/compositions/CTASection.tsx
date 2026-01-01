import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Heading, Text } from '@/design-system';

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  onAction: () => void;
  icon?: LucideIcon;
  variant?: 'dark' | 'light';
  className?: string;
}

export const CTASection = ({ 
  title, 
  description, 
  buttonLabel, 
  onAction, 
  icon: Icon,
  variant = 'dark',
  className = ''
}: CTASectionProps) => {
  const isDark = variant === 'dark';
  const bgClass = isDark 
    ? 'bg-gradient-to-br from-gray-900 to-black' 
    : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const descClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const buttonClass = isDark
    ? 'bg-white text-black hover:bg-gray-100'
    : 'bg-black text-white hover:bg-gray-800';
  const iconBgClass = isDark ? 'bg-white/10' : 'bg-gray-100';
  const iconColor = isDark ? 'text-yellow-400' : 'text-gray-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className={`${bgClass} rounded-2xl border ${isDark ? 'border-gray-800' : 'border-gray-200'} p-8 md:p-12 text-center relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10">
          {Icon && (
            <div className={`inline-flex items-center justify-center w-16 h-16 ${iconBgClass} backdrop-blur-sm rounded-2xl mb-6`}>
              <Icon className={`h-8 w-8 ${iconColor}`} />
            </div>
          )}
          <Heading as="h2" size="2xl" className={`mb-3 md:mb-4 ${textClass} text-xl md:text-2xl`}>
            {title}
          </Heading>
          <Text className={`${descClass} mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed px-4`}>
            {description}
          </Text>
          <motion.button
            onClick={onAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 ${buttonClass} text-sm md:text-base lg:text-lg font-semibold rounded-lg transition-colors shadow-lg`}
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

