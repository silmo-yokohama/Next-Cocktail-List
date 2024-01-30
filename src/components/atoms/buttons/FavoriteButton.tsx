import React from "react";
import HeartEmptyIcon from "../SVG/HeartEmptyIcon";
import Link from "next/link";

const FavoriteButton = () => {
  return (
    <Link
      href="/favorites"
      className="btn flex w-auto items-center justify-start border-0 bg-transparent"
    >
      <HeartEmptyIcon />
      <span className="hidden md:inline-block">お気に入り</span>
    </Link>
  );
};

export default FavoriteButton;
