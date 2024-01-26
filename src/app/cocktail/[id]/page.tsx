import CocktailDetailTemplate from "@/components/templates/CocktailDetailTemplate";
import React from "react";
interface PageProps {
  params: {
    id: number;
  };
}

const CocktailPage = async ({ params }: PageProps) => {
  return <CocktailDetailTemplate id={params.id} />;
};

export default CocktailPage;
