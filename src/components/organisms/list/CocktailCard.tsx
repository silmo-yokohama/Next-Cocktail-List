import CardImage from "@/components/atoms/images/CardImage";
import { CocktailData } from "@/types/CocktailData";
import Link from "next/link";
import React from "react";
import CocktailCardContent from "../../molecules/cards/CocktailCardContent";
import CocktailCardFooter from "../../molecules/cards/CocktailCardFooter";
interface Props {
  data: CocktailData;
}

const CocktailCard = ({ data }: Props) => {
  const url = `/cocktail/${data.cocktail_id}`;

  return (
    <div className="shadow-3xl group card m-auto w-11/12 overflow-hidden rounded-md bg-base-200 hover:shadow-secondary">
      <Link href={url} className="">
        <CardImage
          image={`https://dm58o2i5oqos8.cloudfront.net/photos/${data.cocktail_id}.jpg`}
          alt={data.cocktail_name_english}
        />
      </Link>

      <div className="card-body p-3 pb-0">
        <CocktailCardContent data={data} href={url} />

        <CocktailCardFooter data={data} />
      </div>
    </div>
  );
};

export default CocktailCard;
