import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Line = ({ className, children }: Props) => {
  return <div className={`divider ${className}`}>{children}</div>;
};

export default Line;
