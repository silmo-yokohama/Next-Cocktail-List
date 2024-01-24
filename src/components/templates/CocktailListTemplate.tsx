import { getCocktails } from "@/libs/getCockTail";
import { CocktailAPIResponse } from "@/types/SearchResponseType";
import React from "react";
import CocktailList from "../organisms/list/CocktailList";
import SubHeader from "../organisms/header/SubHeader";
import Pagination from "../organisms/Pagination";
import { getPaginateLink } from "@/functions/Paginate";
interface Props {
  page: number;
  title: string;
}
const CocktailListTemplate = async ({ page, title }: Props) => {
  const result: CocktailAPIResponse = await getCocktails({
    page: Number(page),
  });
  const { next, prev } = getPaginateLink(result);

  return (
    <div className="w-full">
      <SubHeader>{title}</SubHeader>
      {result.status === "0000" ? (
        <CocktailList list={result.cocktails} />
      ) : (
        <div className=""></div>
      )}

      <Pagination next={next} prev={prev} />
    </div>
  );
};

export default CocktailListTemplate;
