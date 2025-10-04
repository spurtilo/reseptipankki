import { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import RecipeNavbar from "../components/RecipeNavbar";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";

const RecipeDetails = () => {
  const [activeSection, setActiveSection] = useState("ingredients");
  const { state } = useLocation();
  const { recipe } = state;

  return (
    <div className="page-container">
      <Header />
      <div className="recipe-container">
        <RecipeNavbar setActiveSection={setActiveSection} />
        {activeSection === "ingredients" && (
          <RecipeIngredients
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        )}
        {activeSection === "instructions" && (
          <RecipeInstructions
            name={recipe.name}
            instructions={recipe.instructions}
          />
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
