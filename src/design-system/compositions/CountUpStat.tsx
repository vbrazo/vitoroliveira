import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { Text } from '@/design-system';

interface CountUpStatProps {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  className?: string;
}

export const CountUpStat = ({ 
  num, 
  suffix, 
  decimals = 0, 
  subheading,
  className = ''
}: CountUpStatProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className={`flex min-w-[140px] flex-col items-center py-4 sm:py-0 ${className}`}>
      <p className="mb-2 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <Text className="max-w-48 text-center text-xs md:text-sm text-gray-600 leading-tight">
        {subheading}
      </Text>
    </div>
  );
};

