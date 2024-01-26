import FavoriteAnimeButton from "@/components/atoms/buttons/FavoriteAnimeButton";
import { CocktailData } from "@/types/CocktailData";
import React from "react";
import ContentHeader from "../header/ContentHeader";
import Line from "@/components/atoms/line/Line";
import CocktailDetailImage from "@/components/molecules/detail/CocktailDetailImage";
import Description from "@/components/atoms/typography/Description";
import CocktailDetailDescriptionItem from "@/components/molecules/detail/CocktailDetailDescriptionItem";
import SearchIcon from "@/components/atoms/SVG/SearchIcon";
import RecipeTable from "@/components/molecules/detail/RecipeTable";
import ProgressBar from "@/components/atoms/forms/ProgressBar";
import AlcoholParamater from "@/components/molecules/forms/AlcoholParamater";
interface Props {
  data: CocktailData;
}

const CocktailDetail = ({ data }: Props) => {
  return (
    <article className="m-auto mb-10 flex w-11/12 max-w-4xl flex-col gap-2 bg-base-200 p-5 md:grid md:grid-cols-2">
      <ContentHeader english={data.cocktail_name_english} id={data.cocktail_id}>
        {data.cocktail_name}
      </ContentHeader>

      <Line className="col-span-2" />

      <section className="px-1 md:px-10">
        <CocktailDetailImage
          src={`https://dm58o2i5oqos8.cloudfront.net/photos/${data.cocktail_id}.jpg`}
          alt={data.cocktail_name_english}
        />
        <Description className="mt-3">{data.cocktail_desc}</Description>
      </section>
      <section className=" w-full overflow-hidden px-2 md:px-5">
        <Line className="en">DESCRIPTION</Line>

        <div className="flex flex-col gap-5 ">
          <CocktailDetailDescriptionItem title="BASE">
            {data.base_name}
          </CocktailDetailDescriptionItem>
          <CocktailDetailDescriptionItem title="TASTE">
            {data.taste_name}
          </CocktailDetailDescriptionItem>
          <CocktailDetailDescriptionItem title="GLASS">
            {data.glass_name}
          </CocktailDetailDescriptionItem>
          <CocktailDetailDescriptionItem title="STYLE">
            {data.style_name}
          </CocktailDetailDescriptionItem>
          <CocktailDetailDescriptionItem title="ALC%">
            <AlcoholParamater max={50} alcohol={data.alcohol} />
          </CocktailDetailDescriptionItem>
        </div>
        <div className="en divider-bg-base-200 divider mt-10">RECIPE</div>

        <RecipeTable recipes={data.recipes} />
      </section>

      <section className="col-span-2 px-5"></section>
    </article>
  );
};

export default CocktailDetail;
