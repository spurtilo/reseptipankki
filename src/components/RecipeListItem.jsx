const RecipeListItem = ({ recipe }) => {
  return (
    <div className="recipe-list-item">
      <img src={recipe.img} className="recipe-image" />
      {recipe.name}
    </div>
  );
};

export default RecipeListItem;
