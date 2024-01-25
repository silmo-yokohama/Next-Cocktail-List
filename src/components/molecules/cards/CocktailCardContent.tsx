import CocktailIcon from "@/components/atoms/SVG/CocktailIcon";
import CardText from "@/components/atoms/typography/CardText";
import CardTitle from "@/components/atoms/typography/CardTitle";
import { CocktailData } from "@/types/CocktailData";
import { url } from "inspector";
import React from "react";

interface Props {
  data: CocktailData;
  href: string;
}

const CocktailCardContent = ({ data, href }: Props) => {
  return (
    <div>
      <CardTitle href={href}>
        <CocktailIcon />
        {data.cocktail_name}
      </CardTitle>
      <CardText>{data.cocktail_digest}</CardText>
    </div>
  );
};

export default CocktailCardContent;
