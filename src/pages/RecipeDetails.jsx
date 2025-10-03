import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import RecipeIngredients from "../components/RecipeIngredients";

const RecipeDetails = () => {
  const { state } = useLocation();
  const { recipe } = state;

  return (
    <div className="page-container">
      <Header />
      <div className="recipe-container">
        <RecipeIngredients recipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeDetails;
