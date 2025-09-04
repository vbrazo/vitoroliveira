import React from "react";

type AllowedTags = "section" | "div" | "main" | "article" | "aside" | "header" | "footer" | "nav";

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: AllowedTags;
  padded?: boolean;
  bleedX?: boolean;
};

export const Section: React.FC<SectionProps> = ({
  as = "section",
  className = "",
  padded = true,
  bleedX = false,
  children,
  ...rest
}) => {
  const padding = padded ? "py-20" : "";
  const bleed = bleedX ? "px-0" : "px-4";

  return React.createElement(
    as,
    { className: `${padding} ${bleed} ${className}` as string, ...rest },
    children
  );
};
