const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      <h2>Ainekset</h2>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
