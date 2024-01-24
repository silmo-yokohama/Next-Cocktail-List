import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CardTitle = ({ children }: Props) => {
  return <h2 className="card-title">{children}</h2>;
};

export default CardTitle;
