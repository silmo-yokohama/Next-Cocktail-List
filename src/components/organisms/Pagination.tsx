import Link from "next/link";
import React from "react";
import PaginateLink from "../atoms/buttons/PaginateLink";
interface Props {
  next: string | null;
  prev: string | null;
}

const Pagination = ({ next, prev }: Props) => {
  return (
    <div className="m-auto my-4 mt-10 flex max-w-[1980px] justify-between px-4">
      <PaginateLink href={prev}>Prev</PaginateLink>
      <PaginateLink href={next}>Next</PaginateLink>
    </div>
  );
};

export default Pagination;
