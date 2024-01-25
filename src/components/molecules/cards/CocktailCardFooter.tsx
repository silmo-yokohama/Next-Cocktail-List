"use client";

import BadgeOutline from "@/components/atoms/badge/BadgeOutline";
import FavoriteAnimeButton from "@/components/atoms/buttons/FavoriteAnimeButton";
import { Favorite } from "@/functions/Storage";
import { CocktailData } from "@/types/CocktailData";
import React, { useEffect, useState } from "react";

interface Props {
  data: CocktailData;
}

const CocktailCardFooter = ({ data }: Props) => {
  const [checked, setChecked] = useState(false);

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (Favorite.exists(data.cocktail_id)) {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (checked) {
      Favorite.add(data.cocktail_id);
    } else {
      Favorite.delete(data.cocktail_id);
    }
  }, [checked]);

  return (
    <div className="card-actions my-3 items-center justify-between">
      <div className="">
        <button className="btn btn-circle h-12 w-12" onClick={handlerClick}>
          <FavoriteAnimeButton checked={checked} />
        </button>
      </div>
      <BadgeOutline>{data.taste_name}</BadgeOutline>
    </div>
  );
};

export default CocktailCardFooter;
