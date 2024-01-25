"use client";
import React from "react";
interface Props {
  image: string;
  alt: string;
}

const CardImage = ({ image, alt }: Props) => {
  return (
    <figure className="h-44 w-auto md:h-56 lg:h-64">
      <img
        src={image}
        alt={alt}
        onError={(e: any) => (e.target.src = "/images/noimage.png")}
        className="h-full w-full max-w-none object-cover transition-all duration-500 hover:scale-125"
      />
    </figure>
  );
};

export default CardImage;
