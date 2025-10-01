import RecipeListItem from "../components/RecipeListItem";
import Header from "../components/Header";
import recipes from "../data/recipes.json";

const RecipeList = () => {
  return (
    <>
      <Header />
      {recipes.map((recipe, index) => (
        <RecipeListItem key={index} recipe={recipe} />
      ))}
    </>
  );
};

export default RecipeList;
