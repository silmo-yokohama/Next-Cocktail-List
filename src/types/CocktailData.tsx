import { CocktailRecipe } from "./CocktailRecipesType";

export type CocktailData = {
  cocktail_id: number;
  cocktail_name: string;
  cocktail_name_english: string;
  base_name: string;
  technique_name: string;
  taste_name: string;
  style_name: string;
  alcohol: number;
  top_name: string;
  glass_name: string;
  type_name: string;
  cocktail_digest: string;
  cocktail_desc: string;
  recipes: CocktailRecipe[];
};
