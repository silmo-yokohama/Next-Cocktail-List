import CocktailListTemplate from "@/components/templates/CocktailListTemplate";
import React from "react";
interface PageProps {
  params: {
    page: number;
  };
}

const CocktailListPage = async ({ params }: PageProps) => {
  return <CocktailListTemplate page={params.page} title="カクテル一覧" />;
};

export default CocktailListPage;
