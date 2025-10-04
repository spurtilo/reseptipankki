const RecipeIngredients = ({ name, ingredients }) => {
  return (
    <div>
      <h2>{name}</h2>
      {ingredients.map((ingredient, i) => (
        <p key={i}>{ingredient}</p>
      ))}
    </div>
  );
};

export default RecipeIngredients;
