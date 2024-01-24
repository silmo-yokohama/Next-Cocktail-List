import BadgeOutline from "@/components/atoms/badge/BadgeOutline";
import BadgeSecondary from "@/components/atoms/badge/BadgeSecondary";
import CardImage from "@/components/atoms/images/CardImage";
import CardText from "@/components/atoms/typography/CardText";
import CardTitle from "@/components/atoms/typography/CardTitle";
import { CocktailData } from "@/types/CocktailData";
import React from "react";
interface Props {
  data: CocktailData;
}

const CocktailCard = ({ data }: Props) => {
  return (
    <div className="shadow-3xl group card m-auto w-11/12 overflow-hidden rounded-md bg-base-200 hover:shadow-primary">
      <a href={`/list/${data.cocktail_id}`} className="">
        <CardImage
          image={`https://dm58o2i5oqos8.cloudfront.net/photos/${data.cocktail_id}.jpg`}
          alt={data.cocktail_name_english}
        />
        <div className="card-body">
          <CardTitle>
            {data.cocktail_name}
            <BadgeSecondary>{data.base_name}</BadgeSecondary>
          </CardTitle>
          <CardText>{data.cocktail_digest}</CardText>
          <div className="card-actions justify-end">
            <BadgeOutline>{data.taste_name}</BadgeOutline>
            <BadgeOutline>{data.glass_name}</BadgeOutline>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CocktailCard;
