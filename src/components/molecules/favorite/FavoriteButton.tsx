"use client";

import FavoriteAnimeButton from "@/components/atoms/buttons/FavoriteAnimeButton";
import { Favorite } from "@/functions/Storage";
import React, { useEffect, useState } from "react";

interface Props {
  id: number;
}

const FavoriteButton = ({ id }: Props) => {
  const [checked, setChecked] = useState(false);

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (Favorite.exists(id)) {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (checked) {
      Favorite.add(id);
    } else {
      Favorite.delete(id);
    }
  }, [checked]);

  return (
    <button className="btn btn-circle h-12 w-12" onClick={handlerClick}>
      <FavoriteAnimeButton checked={checked} />
    </button>
  );
};

export default FavoriteButton;
