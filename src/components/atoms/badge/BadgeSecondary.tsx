import React from "react";
interface Props {
  children: string;
}

const BadgeSecondary = ({ children }: Props) => {
  return <div className="badge badge-secondary">{children}</div>;
};

export default BadgeSecondary;
