import Markdown from "react-markdown";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className="markdown-ingredients">
      <h2>Ainekset</h2>
      <p>4 annosta</p>
      <Markdown>{ingredients}</Markdown>
    </div>
  );
};

export default RecipeIngredients;
