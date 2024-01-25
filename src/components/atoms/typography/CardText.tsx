import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CardText = ({ children }: Props) => {
  return <p className="prose text-xs">{children}</p>;
};

export default CardText;
