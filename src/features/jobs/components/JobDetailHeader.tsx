import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Heading, Text } from '@/design-system';
import { JobType } from '@/data/jobs';
import { JobMetaInfo } from './JobMetaInfo';
import { JobTags } from './JobTags';

interface JobDetailHeaderProps {
  job: JobType;
}

export const JobDetailHeader = ({ job }: JobDetailHeaderProps) => {
  return (
    <>
      <Link
        to="/jobs"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all jobs</span>
      </Link>

      <div className="mb-6">
        <Heading as="h1" size="4xl" className="mb-3 text-gray-900 text-2xl md:text-3xl lg:text-4xl">
          {job.title}
        </Heading>
        <Text className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-6">
          {job.company}
        </Text>

        <JobMetaInfo job={job} size="md" />
      </div>

      <JobTags tags={job.tags} showIcon size="md" />
    </>
  );
};
