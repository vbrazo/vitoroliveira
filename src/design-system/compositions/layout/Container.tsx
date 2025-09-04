import React from "react";

type AllowedTags =
  | "div"
  | "section"
  | "main"
  | "header"
  | "footer"
  | "article"
  | "aside"
  | "nav";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: AllowedTags;
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
  as = "div",
  className = "",
  maxWidth = "2xl",
  children,
  ...rest
}) => {
  const mw = maxWidthToClass[maxWidth] ?? "max-w-2xl";
  return React.createElement(
    as,
    { className: `container mx-auto px-4 ${mw} ${className}` as string, ...rest },
    children
  );
};
