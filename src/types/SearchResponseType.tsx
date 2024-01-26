import { CocktailData } from "./CocktailData";

export type CocktailsAPIResponse = {
  status: string;
  error_detail?: string;
  total_pages: number;
  current_page: number;
  cocktails: CocktailData[];
};

export type CocktailAPIResponse = {
  status: string;
  cocktail: CocktailData;
};
