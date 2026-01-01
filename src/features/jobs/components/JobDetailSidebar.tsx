import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Heading, Text } from '@/design-system';
import { JobType } from '@/data/jobs';

interface JobDetailSidebarProps {
  job: JobType;
  onApply: () => void;
  onScheduleCall: () => void;
}

export const JobDetailSidebar = ({ job, onApply, onScheduleCall }: JobDetailSidebarProps) => {
  return (
    <div className="sticky top-20 md:top-24 space-y-4 md:space-y-6">
      {/* Apply CTA */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <motion.button
          onClick={onApply}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 bg-black text-white text-sm md:text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors mb-3 md:mb-4"
        >
          Apply Now
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </motion.button>
        <Text className="text-xs md:text-sm text-gray-500 text-center">
          We'll help you through the application process
        </Text>
      </div>

      {/* Job Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <Heading as="h3" size="lg" className="mb-3 md:mb-4 text-gray-900 text-base md:text-lg">
          Job Details
        </Heading>
        <div className="space-y-3 md:space-y-4">
          <div>
            <Text className="text-xs md:text-sm font-semibold text-gray-700 mb-1">
              Location
            </Text>
            <Text className="text-xs md:text-sm text-gray-600">
              {job.location}
            </Text>
          </div>
          <div>
            <Text className="text-xs md:text-sm font-semibold text-gray-700 mb-1">
              Type
            </Text>
            <Text className="text-xs md:text-sm text-gray-600">
              {job.type}
            </Text>
          </div>
          {job.salary && (
            <div>
              <Text className="text-xs md:text-sm font-semibold text-gray-700 mb-1">
                Salary
              </Text>
              <Text className="text-xs md:text-sm text-gray-600">
                {job.salary}
              </Text>
            </div>
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 md:p-6">
        <Heading as="h3" size="lg" className="mb-2 text-gray-900 text-base md:text-lg">
          Need help?
        </Heading>
        <Text className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
          Have questions about this role or the application process?
        </Text>
        <motion.button
          onClick={onScheduleCall}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-white text-black text-xs md:text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
        >
          Schedule a call
        </motion.button>
      </div>
    </div>
  );
};
