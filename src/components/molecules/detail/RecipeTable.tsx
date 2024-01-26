import { CocktailRecipe } from "@/types/CocktailRecipesType";
import React from "react";
interface Props {
  recipes: CocktailRecipe[];
}

const RecipeTable = ({ recipes }: Props) => {
  return (
    <table className="table table-sm border-spacing-10">
      <thead className="bg-base-300">
        <tr>
          <th>材料</th>
          <th className="text-right">分量</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => {
          return (
            <tr key={index} className="border-b border-dashed border-base-300">
              <td className="text-xs">{recipe.ingredient_name}</td>
              <td className="text-right text-xs">
                {recipe.amount}
                {recipe.unit}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RecipeTable;
