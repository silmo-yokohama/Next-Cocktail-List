import CocktailListTemplate from "@/components/templates/CocktailListTemplate";
import Error from "@/components/templates/Error";
import { getPaginateLink } from "@/functions/Paginate";
import { getCocktails } from "@/libs/getCockTail";
import { SearchQuery } from "@/types/SearchQueryType";
import React from "react";

interface PageProps {
  searchParams: SearchQuery;
}

const CocktailSearch = async ({ searchParams }: PageProps) => {
  const results = await getCocktails(searchParams);
  const { next, prev } = getPaginateLink(results);

  return (
    <>
      {results.status === "0000" ? (
        <div className="">
          {results.cocktails.length > 0 ? (
            <CocktailListTemplate
              response={results}
              title="カクテル一覧"
              next={next}
              prev={prev}
              searchInput={searchParams.word}
            />
          ) : (
            <div className="404">
              <Error errorCode="E000" />
            </div>
          )}
        </div>
      ) : (
        <div className="error"></div>
      )}
    </>
  );
};

export default CocktailSearch;
