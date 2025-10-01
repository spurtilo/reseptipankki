import RecipeListItem from "../components/RecipeListItem";
import recipes from "../data/recipes.json";

const RecipeList = () => {
  return (
    <>
      {recipes.map((recipe, index) => (
        <RecipeListItem key={index} recipe={recipe} />
      ))}
    </>
  );
};

export default RecipeList;
