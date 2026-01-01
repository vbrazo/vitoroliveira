import { MapPin, Briefcase, DollarSign } from 'lucide-react';
import { JobType } from '@/data/jobs';

interface JobMetaInfoProps {
  job: JobType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const JobMetaInfo = ({ job, size = 'md', className = '' }: JobMetaInfoProps) => {
  const iconSizes = {
    sm: 'h-3 w-3 md:h-4 md:w-4',
    md: 'h-4 w-4 md:h-5 md:w-5',
    lg: 'h-5 w-5',
  };

  const textSizes = {
    sm: 'text-xs md:text-sm',
    md: 'text-sm md:text-base',
    lg: 'text-base',
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 md:gap-4 ${textSizes[size]} text-gray-600 ${className}`}>
      <div className="flex items-center gap-1.5">
        <MapPin className={iconSizes[size]} />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Briefcase className={iconSizes[size]} />
        <span>{job.type}</span>
      </div>
      {job.salary && (
        <div className="flex items-center gap-1.5">
          <DollarSign className={`${iconSizes[size]} ${size === 'sm' ? 'text-green-600' : ''}`} />
          <span className={size === 'sm' ? 'font-semibold text-gray-900' : ''}>{job.salary}</span>
        </div>
      )}
    </div>
  );
};
