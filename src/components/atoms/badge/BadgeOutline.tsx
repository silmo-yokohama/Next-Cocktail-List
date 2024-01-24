import React from "react";
interface Props {
  children: string;
}

const BadgeOutline = ({ children }: Props) => {
  return <div className="badge badge-outline">{children}</div>;
};

export default BadgeOutline;
