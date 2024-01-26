import { SearchQuery } from "@/types/SearchQueryType";
const defaultParams: SearchQuery = {
  limit: 24,
};
const ENDPOINT = process.env.NEXT_PUBLIC_COCKTAIL_SEARCH!;

export const getCocktails = async (params: SearchQuery = {}) => {
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

export const getCocktail = async (id: number) => {
  const res = await fetch(`${ENDPOINT}/${id}`, { cache: "force-cache" });
  const result = await res.json();

  return result;
};
