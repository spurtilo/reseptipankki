import { useQuery } from "@tanstack/react-query";
import recipeService from "../services/recipes";

import Header from "../components/Header";
import RecipeListItem from "../components/RecipeListItem";

const RecipeList = () => {
  const {
    data: recipes = [],
    isPending,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: recipeService.getAll,
  });

  return (
    <div className="page-container">
      <Header />
      <div className="recipe-list-container">
        {isPending && <p>Reseptejä ladataan...</p>}
        {error && <p>Virhe reseptejä ladatessa: {error.message}</p>}
        {isSuccess && recipes.length === 0 && (
          <p>Ei löytynyt yhtään reseptejä.</p>
        )}
        {recipes.map((recipe, index) => (
          <RecipeListItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
