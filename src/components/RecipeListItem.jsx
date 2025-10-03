import { useNavigate } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`, { state: { recipe } });
  };

  return (
    <div className="recipe-list-item" onClick={handleClick}>
      <img src={recipe.img} className="recipe-image" />
      {recipe.name}
    </div>
  );
};

export default RecipeListItem;
