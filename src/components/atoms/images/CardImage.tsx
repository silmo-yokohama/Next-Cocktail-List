"use client";
import React from "react";
interface Props {
  image: string;
  alt: string;
}

const CardImage = ({ image, alt }: Props) => {
  return (
    <figure className="h-44 md:h-56 lg:h-64">
      <img
        src={image}
        alt={alt}
        onError={(e: any) => (e.target.src = "/images/noimage.png")}
        className="w-full transition-all duration-500 group-hover:grayscale-0 lg:grayscale"
      />
    </figure>
  );
};

export default CardImage;
