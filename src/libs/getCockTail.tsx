import { SearchQuery } from "@/types/SearchQueryType";
const defaultParams: SearchQuery = {
  limit: 24,
};

export const getCocktails = async (params: SearchQuery = {}) => {
  const ENDPOINT = process.env.NEXT_PUBLIC_COCKTAIL_SEARCH!;
  const query: SearchQuery = { ...defaultParams, ...params };
  const url = new URL(ENDPOINT);

  //  Setting Params
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.append(key, String(value));
  }

  //  API
  const res = await fetch(url.toString(), { cache: "force-cache" });
  const results = await res.json();

  return results;
};
