import { CocktailsAPIResponse } from "@/types/SearchResponseType";

export const getPaginateLink = (
  data: CocktailsAPIResponse,
): { next: string | null; prev: string | null } => {
  const nextLink =
    data.total_pages === data.current_page
      ? null
      : `/list/${data.current_page + 1}`;
  const prevLink =
    data.current_page === 1 ? null : `/list/${data.current_page - 1}`;

  return { next: nextLink, prev: prevLink };
};
