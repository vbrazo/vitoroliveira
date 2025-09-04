import type React from "react";

export type AsChildProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.HTMLAttributes<JSX.IntrinsicElements[T]> & { as?: T };
