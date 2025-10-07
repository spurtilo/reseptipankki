import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import recipeService from "../services/recipes";

import Header from "../components/Header";
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
      <Header />
      <div className="recipe-container">
        {isPending && <p>Reseptejä ladataan...</p>}
        {error && <p>Virhe reseptejä ladatessa: {error.message}</p>}
        {isSuccess && (
          <>
            <h1 className="recipe-name">{recipe.name}</h1>
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
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
