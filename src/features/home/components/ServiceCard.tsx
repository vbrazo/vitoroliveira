import React, { ReactNode } from 'react';
import { Card, CardContent } from "@/design-system";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkUrl?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, linkUrl, linkText }) => {
  const content = (
    <>
      <div className="mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-cto-dark">{title}</h3>
      <p className="text-cto-gray">{description}</p>
    </>
  );

  return (
    <Card className="group/card relative overflow-hidden">
      <CardContent className="p-8">
        {linkUrl ? (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
            {content}
            <div className="mt-4 text-black hover:underline">
              {linkText || 'Learn more'} →
            </div>
          </a>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
