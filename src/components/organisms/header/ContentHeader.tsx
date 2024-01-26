"use client";

import FavoriteAnimeButton from "@/components/atoms/buttons/FavoriteAnimeButton";
import FavoriteButton from "@/components/molecules/favorite/FavoriteButton";
import React, { ReactNode } from "react";

interface Props {
  id: number;
  english: string;
  children: ReactNode;
}

const ContentHeader = ({ id, english, children }: Props) => {
  return (
    <header className="col-span-2 flex flex-1 items-center justify-between">
      <h1 className=" flex flex-col">
        <span className="en prose text-xs">{english}</span>
        <span className="text-2xl">{children}</span>
      </h1>

      <div className="flex flex-nowrap items-center">
        <FavoriteButton id={id} />
      </div>
    </header>
  );
};

export default ContentHeader;
