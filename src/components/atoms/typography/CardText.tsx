import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CardText = ({ children }: Props) => {
  return <p className="text-xs">{children}</p>;
};

export default CardText;
