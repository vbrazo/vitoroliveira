import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Heading, Text } from '@/design-system';
import { JobType } from '@/data/jobs';
import { JobMetaInfo } from './JobMetaInfo';
import { JobTags } from './JobTags';

interface JobCardProps {
  job: JobType;
  index: number;
  showActiveBadge?: boolean;
}

export const JobCard = ({ job, index, showActiveBadge = false }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/jobs/${job.slug}`}
        className="block bg-white rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
          <div className="flex-1">
            {/* Active Hiring Badge */}
            {showActiveBadge && (
              <div className="flex items-center gap-1.5 mb-2 md:mb-3">
                <TrendingUp className="h-3 w-3 md:h-3.5 md:w-3.5 text-green-600" />
                <span className="text-[10px] md:text-xs font-semibold text-green-600 uppercase tracking-wide">
                  Active Hiring
                </span>
              </div>
            )}

            {/* Job Title */}
            <Heading as="h2" size="2xl" className="mb-2 text-gray-900 group-hover:text-black transition-colors text-xl md:text-2xl">
              {job.title}
            </Heading>

            {/* Company */}
            <Text className="text-base md:text-lg text-gray-700 font-medium mb-3 md:mb-4">
              {job.company}
            </Text>

            {/* Job Meta */}
            <div className="mb-3 md:mb-4">
              <JobMetaInfo job={job} size="sm" />
            </div>

            {/* Description */}
            <Text className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2 leading-relaxed">
              {job.description}
            </Text>

            {/* Technology Tags */}
            <JobTags tags={job.tags} maxVisible={5} />
          </div>

          {/* Right Side - CTA */}
          <div className="flex items-center md:flex-col md:items-end gap-2 md:min-w-[120px] pt-2 md:pt-0">
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center gap-1.5 md:gap-2 text-black text-sm md:text-base font-semibold group-hover:text-black transition-colors"
            >
              <span>View details</span>
              <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </motion.div>
            <Text className="text-[10px] md:text-xs text-gray-500 hidden md:block">
              Apply now
            </Text>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
