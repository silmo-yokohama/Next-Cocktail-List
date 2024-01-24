import CocktailCard from "@/components/molecules/cards/CocktailCard";
import SubHeader from "@/components/organisms/header/SubHeader";
import CocktailList from "@/components/organisms/list/CocktailList";
import { getCocktails } from "@/libs/getCockTail";
import { CocktailAPIResponse } from "@/types/SearchResponseType";
import React from "react";

const CocktailListPage = async () => {
  const result: CocktailAPIResponse = await getCocktails();

  return (
    <div className="w-full">
      <SubHeader>カクテル一覧</SubHeader>
      {result.status === "0000" ? (
        <CocktailList list={result.cocktails} />
      ) : (
        <div className=""></div>
      )}
    </div>
  );
};

export default CocktailListPage;
