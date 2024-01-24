"use client";
import React from "react";
interface Props {
  image: string;
  alt: string;
}

const CardImage = ({ image, alt }: Props) => {
  return (
    <figure className="h-40">
      <img
        src={image}
        alt={alt}
        onError={(e: any) => (e.target.src = "/images/noimage.png")}
      />
    </figure>
  );
};

export default CardImage;
