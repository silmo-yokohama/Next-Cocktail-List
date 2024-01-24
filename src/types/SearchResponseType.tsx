import { CocktailData } from "./CocktailData";

export type CocktailAPIResponse = {
  status: string;
  error_detail?: string;
  total_pages: number;
  current_page: number;
  cocktails: CocktailData[];
};
