const RecipeListItem = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      {recipe.ingredients.map((ingredient, i) => (
        <p key={i}>{ingredient}</p>
      ))}
    </div>
  );
};

export default RecipeListItem;
