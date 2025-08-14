import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

const maxWidthToClass: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "max-w-[100%]",
};

export const Container: React.FC<ContainerProps> = ({
  as: Comp = "div",
  className = "",
  maxWidth = "2xl",
  children,
  ...rest
}) => {
  const mw = maxWidthToClass[maxWidth] ?? "max-w-2xl";
  return (
    <Comp className={`container mx-auto px-4 ${mw} ${className}`} {...rest}>
      {children}
    </Comp>
  );
};


