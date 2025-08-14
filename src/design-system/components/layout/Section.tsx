import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  padded?: boolean;
  bleedX?: boolean;
};

export const Section: React.FC<SectionProps> = ({
  as: Comp = "section",
  className = "",
  padded = true,
  bleedX = false,
  children,
  ...rest
}) => {
  const padding = padded ? "py-12 md:py-16" : "";
  const bleed = bleedX ? "px-0" : "px-4";

  return (
    <Comp className={`${padding} ${bleed} ${className}`} {...rest}>
      {children}
    </Comp>
  );
};


