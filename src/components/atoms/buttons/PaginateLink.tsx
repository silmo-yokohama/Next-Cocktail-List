import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  href: string | null;
}
const PaginateLink = ({ children, href }: Props) => {
  return (
    <>
      {href ? (
        <Link href={href} className="btn btn-outline px-8">
          {children}
        </Link>
      ) : (
        <button className="btn btn-disabled btn-outline px-8" disabled>
          {children}
        </button>
      )}
    </>
  );
};

export default PaginateLink;
