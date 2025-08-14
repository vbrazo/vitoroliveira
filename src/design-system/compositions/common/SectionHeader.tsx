import React from "react";
import { cn } from "@/design-system/utils";

type Align = "left" | "center";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: Align;
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={cn("max-w-3xl", alignClass, className)}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mb-3 bg-white text-gray-800">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl">{subtitle}</p>
      )}
    </div>
  );
};
