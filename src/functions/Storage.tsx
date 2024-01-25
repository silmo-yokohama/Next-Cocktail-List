import { FavoriteData, FavoriteStorage } from "@/types/FavoriteStorageType";
import { format } from "date-fns";

export class Favorite {
  static storageKey = "COCKTAIL_LIST_STORAGE";

  static getFavorites(): FavoriteData[] {
    const storage = window.localStorage.getItem(this.storageKey);

    if (!storage) {
      return [];
    }

    const { favorites } = JSON.parse(storage);
    return favorites;
  }

  static add(id: number): FavoriteData[] | boolean {
    const favorites = this.getFavorites();

    if (this.exists(id, favorites)) {
      return false;
    }

    favorites.push({
      cocktailId: id,
      createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    });

    window.localStorage.setItem(
      this.storageKey,
      JSON.stringify({ favorites: favorites }),
    );

    return favorites;
  }

  static delete(id: number): FavoriteData[] {
    const favorites = this.getFavorites();
    const filleredFav: FavoriteData[] = favorites.filter(
      (f) => f.cocktailId !== id,
    );

    window.localStorage.setItem(
      this.storageKey,
      JSON.stringify({ favorites: filleredFav }),
    );
    return filleredFav;
  }

  static exists(id: number, data: FavoriteData[] | null = null): boolean {
    if (!data) {
      data = this.getFavorites();
    }
    const result = data.filter((f) => f.cocktailId === id);

    return result.length > 0 ? true : false;
  }
}
