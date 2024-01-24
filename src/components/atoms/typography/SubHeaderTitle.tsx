import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const SubHeaderTitle = ({ children }: Props) => {
  return <h1 className="mb-5 text-xl font-bold md:text-5xl">{children}</h1>;
};

export default SubHeaderTitle;
