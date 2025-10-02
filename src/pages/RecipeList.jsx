import RecipeListItem from "../components/RecipeListItem";
import Header from "../components/Header";
import recipes from "../data/recipes.json";

const RecipeList = () => {
  return (
    <>
      <Header />
      <div className="recipe-list-container">
        {recipes.map((recipe, index) => (
          <RecipeListItem key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeList;
