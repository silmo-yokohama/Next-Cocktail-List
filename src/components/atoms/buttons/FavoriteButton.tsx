import React from "react";
import HeartEmptyIcon from "../SVG/HeartEmptyIcon";

const FavoriteButton = () => {
  return (
    <button className="btn flex w-auto items-center justify-start border-0 bg-transparent">
      <HeartEmptyIcon />
      <span className="hidden md:inline-block">お気に入り</span>
    </button>
  );
};

export default FavoriteButton;
