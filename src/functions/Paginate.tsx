import { CocktailsAPIResponse } from "@/types/SearchResponseType";

interface Props {
  next: string | null;
  prev: string | null;
  searchInput?: string | null;
}
export const getPaginateLink = (data: CocktailsAPIResponse): Props => {
  const nextLink =
    data.total_pages === data.current_page
      ? null
      : `/list/${data.current_page + 1}`;
  const prevLink =
    data.current_page === 1 ? null : `/list/${data.current_page - 1}`;

  return { next: nextLink, prev: prevLink };
};
