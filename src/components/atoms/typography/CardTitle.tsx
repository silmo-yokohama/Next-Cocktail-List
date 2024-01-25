import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  href: string;
}

const CardTitle = ({ children, href }: Props) => {
  return (
    <h2 className="card-title ">
      <Link href={href} className="flex w-full items-center gap-2">
        {children}
      </Link>
    </h2>
  );
};

export default CardTitle;
