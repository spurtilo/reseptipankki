import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import recipeService from "../services/recipes";

import AppHeader from "../components/AppHeader";
import RecipeHeader from "../components/RecipeHeader";
import RecipeNavbar from "../components/RecipeNavbar";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";

const RecipeDetails = () => {
  const [activeSection, setActiveSection] = useState("ingredients");
  const { id } = useParams();

  const {
    data: recipe,
    isPending,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => recipeService.getOne(id),
  });

  return (
    <div className="page-container">
      <AppHeader />
      <div className="recipe-container">
        {isPending && <p>Reseptejä ladataan...</p>}
        {error && <p>Virhe reseptejä ladatessa: {error.message}</p>}
        {isSuccess && (
          <>
            <RecipeHeader {...{ recipe }} />
            <RecipeNavbar setActiveSection={setActiveSection} />
            {activeSection === "ingredients" && (
              <RecipeIngredients ingredients={recipe.ingredients} />
            )}
            {activeSection === "instructions" && (
              <RecipeInstructions instructions={recipe.instructions} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
