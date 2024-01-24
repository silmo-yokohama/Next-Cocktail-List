import React from "react";
interface Props {
  children: string;
}

const BadgePrimary = ({ children }: Props) => {
  return <div className="badge badge-primary">{children}</div>;
};

export default BadgePrimary;
