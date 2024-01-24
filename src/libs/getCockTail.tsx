import { SearchQuery } from "@/types/SearchQueryType";

export const getCocktails = async (params: SearchQuery = {}) => {
  const ENDPOINT = process.env.NEXT_PUBLIC_COCKTAIL_SEARCH!;
  const url = new URL(ENDPOINT);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, String(value));
  }

  const res = await fetch(url.toString(), { cache: "force-cache" });
  const results = await res.json();

  return results;
};
