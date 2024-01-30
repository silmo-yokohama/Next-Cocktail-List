import CocktailListTemplate from "@/components/templates/CocktailListTemplate";
import { getPaginateLink } from "@/functions/Paginate";
import { getCocktails } from "@/libs/getCockTail";
import { CocktailsAPIResponse } from "@/types/SearchResponseType";
import React from "react";
interface PageProps {
  params: {
    page: number;
  };
}

const CocktailListPage = async ({ params }: PageProps) => {
  const result: CocktailsAPIResponse = await getCocktails({
    page: params.page,
  });
  const { next, prev } = getPaginateLink(result);

  return (
    <>
      {result.status === "0000" ? (
        <CocktailListTemplate
          response={result}
          title="カクテル一覧"
          next={next}
          prev={prev}
        />
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default CocktailListPage;
