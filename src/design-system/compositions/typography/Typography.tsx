import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
};

const sizeToClass: Record<NonNullable<HeadingProps["size"]>, string> = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  "2xl": "text-5xl",
  "3xl": "text-6xl",
  "4xl": "text-7xl",
  "5xl": "text-8xl",
};

export const Heading: React.FC<HeadingProps> = ({
  as = "h2",
  size = "lg",
  className,
  children,
  ...rest
}) => {
  const Comp = as;
  return (
    <Comp className={cn("font-bold tracking-tight", sizeToClass[size], className)} {...rest}>
      {children}
    </Comp>
  );
};

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  muted?: boolean;
};

export const Text: React.FC<TextProps> = ({ className, muted, children, ...rest }) => (
  <p
    className={cn(
      "leading-relaxed",
      muted ? "text-muted-foreground" : undefined,
      className
    )}
    {...rest}
  >
    {children}
  </p>
);

export const Muted: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="text-muted-foreground">{children}</span>
);
