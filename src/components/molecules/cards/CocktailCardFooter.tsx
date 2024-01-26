"use client";

import BadgeOutline from "@/components/atoms/badge/BadgeOutline";
import { CocktailData } from "@/types/CocktailData";
import React from "react";
import FavoriteButton from "../favorite/FavoriteButton";

interface Props {
  data: CocktailData;
}

const CocktailCardFooter = ({ data }: Props) => {
  return (
    <div className="card-actions my-3 items-center justify-between">
      <div className="">
        <FavoriteButton id={data.cocktail_id} />
      </div>
      <BadgeOutline>{data.taste_name}</BadgeOutline>
    </div>
  );
};

export default CocktailCardFooter;
