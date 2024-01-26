"use client";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const CocktailDetailImage = ({ src, alt }: Props) => {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded">
      <img
        src={src}
        alt={alt}
        onError={(e: any) => (e.target.src = "/images/noimage.png")}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default CocktailDetailImage;
