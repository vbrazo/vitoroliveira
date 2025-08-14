import React from "react";
import { Button } from "@/design-system";

type ActionButtonProps = {
  href?: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  target = "_self",
  children,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer">
        <Button className={className}>{children}</Button>
      </a>
    );
  }

  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};
