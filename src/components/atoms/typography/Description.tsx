import { Children } from "@/types/CommonTypes";
import React from "react";

interface Props extends Children {
  className?: string;
}
const Description = ({ className, children }: Props) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export default Description;
