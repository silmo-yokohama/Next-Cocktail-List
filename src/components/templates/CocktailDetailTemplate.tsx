import { getCocktail } from "@/libs/getCockTail";
import { CocktailData } from "@/types/CocktailData";
import React from "react";
import SubHeader from "../organisms/header/SubHeader";
import CocktailDetail from "../organisms/content/CocktailDetail";
interface Props {
  id: number;
}

const CocktailDetailTemplate = async ({ id }: Props) => {
  const { cocktail, status } = await getCocktail(id);

  return (
    <div className="w-full">
      <SubHeader>{cocktail.cocktail_name}</SubHeader>
      {status === "0000" ? (
        <CocktailDetail data={cocktail} />
      ) : (
        <div className=""></div>
      )}
    </div>
  );
};

export default CocktailDetailTemplate;
