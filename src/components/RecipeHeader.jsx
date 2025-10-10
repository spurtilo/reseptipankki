const RecipeHeader = ({ recipe }) => {
  return (
    <div className="recipe-header">
      <img
        src={recipe.img || "/images/recipe_placeholder.jpg"}
        className="recipe-header-image"
      />
      <h1 className="recipe-name">{recipe.name}</h1>
      {recipe.headerText && (
        <p className="recipe-header-text">{recipe.headerText}</p>
      )}
      {recipe.url && (
        <p className="recipe-header-text">
          URL:{" "}
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            {recipe.url}
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeHeader;
