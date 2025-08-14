import React from "react";

type StatItemProps = {
  value: React.ReactNode;
  label: React.ReactNode;
  className?: string;
};

export const StatItem: React.FC<StatItemProps> = ({ value, label, className }) => {
  return (
    <div className={className}>
      <div className="text-2xl md:text-3xl font-bold">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};
