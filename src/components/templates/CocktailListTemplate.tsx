import { CocktailsAPIResponse } from "@/types/SearchResponseType";
import React from "react";
import CocktailList from "../organisms/list/CocktailList";
import SubHeader from "../organisms/header/SubHeader";
import Pagination from "../organisms/Pagination";
import TopSearchForm from "../molecules/forms/TopSearchForm";

interface Props {
  response: CocktailsAPIResponse;
  title: string;
  next: string | null;
  prev: string | null;
  searchInput?: string | null;
}
const CocktailListTemplate = async ({
  response,
  title,
  next,
  prev,
  searchInput,
}: Props) => {
  const { cocktails } = response;

  return (
    <div className="min-h-screen w-full">
      <SubHeader>{title}</SubHeader>
      <div className="m-auto mb-10 w-7/12 max-w-[1980px]">
        <TopSearchForm searchText={searchInput} />
      </div>
      <CocktailList list={cocktails} />

      <Pagination next={next} prev={prev} />
    </div>
  );
};

export default CocktailListTemplate;
