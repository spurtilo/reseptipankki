import { useEffect, useState } from "react";

import recipeService from "../services/recipes";

import Header from "../components/Header";
import RecipeListItem from "../components/RecipeListItem";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await recipeService.getAll();
        setRecipes(data);
      } catch (error) {
        console.log("ERROR FETCHING RECIPES");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="page-container">
      <Header />
      <div className="recipe-list-container">
        {recipes?.map((recipe, index) => (
          <RecipeListItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
