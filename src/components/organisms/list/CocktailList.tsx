import CocktailCard from "@/components/organisms/list/CocktailCard";
import { CocktailData } from "@/types/CocktailData";
import React from "react";
interface Props {
  list: CocktailData[];
}

const CocktailList = ({ list }: Props) => {
  return (
    <div className="m-auto grid max-w-[1980px] gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {list.map((cocktail, index) => {
        return <CocktailCard key={index} data={cocktail} />;
      })}
    </div>
  );
};

export default CocktailList;
