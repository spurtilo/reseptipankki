import Header from "../components/Header";
import RecipeListItem from "../components/RecipeListItem";
import recipes from "../data/recipes.json";

const RecipeList = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="recipe-list-container">
        {recipes.map((recipe, index) => (
          <RecipeListItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
