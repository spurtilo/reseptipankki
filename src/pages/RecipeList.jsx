import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import recipeService from "../services/recipes";

import Header from "../components/Header";
import RecipeListItem from "../components/RecipeListItem";

const RecipeList = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const data = await recipeService.getAll();
        setRecipes(data);
      } catch (error) {
        console.log("ERROR FETCHING RECIPES: ", error.message);
      }
      setLoading(false);
    };
    fetchRecipes();
  }, []);

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div className="page-container">
      <Header />
      <div className="recipe-list-container">
        {loading && <div>Loading</div>}
        {!loading &&
          recipes.map((recipe, index) => (
            <RecipeListItem key={index} recipe={recipe} onClick={handleClick} />
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
