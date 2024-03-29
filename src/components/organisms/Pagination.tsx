import Link from "next/link";
import React from "react";
import PaginateLink from "../atoms/buttons/PaginateLink";
import RightArrowIcon from "../atoms/SVG/RightArrowIcon";
import LeftArrowIcon from "../atoms/SVG/LeftArrowIcon";
interface Props {
  next: string | null;
  prev: string | null;
}

const Pagination = ({ next, prev }: Props) => {
  const hidden = !next && !prev;
  return (
    <div
      className={`m-auto my-4 mt-10 flex max-w-[1980px] justify-between px-4 ${hidden && "invisible"}`}
    >
      <PaginateLink href={prev}>
        <LeftArrowIcon />
        <span>Prev</span>
      </PaginateLink>
      <PaginateLink href={next}>
        <span>Next</span>
        <RightArrowIcon />
      </PaginateLink>
    </div>
  );
};

export default Pagination;
