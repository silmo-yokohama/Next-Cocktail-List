import CocktailCard from "@/components/molecules/cards/CocktailCard";
import { CocktailData } from "@/types/CocktailData";
import React, { ReactNode } from "react";
interface Props {
  list: CocktailData[];
}

const CocktailList = ({ list }: Props) => {
  return (
    <div className="m-auto flex max-w-6xl flex-wrap justify-between gap-10">
      {list.map((cocktail, index) => {
        return <CocktailCard key={index} data={cocktail} />;
      })}
    </div>
  );
};

export default CocktailList;
