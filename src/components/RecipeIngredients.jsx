import Markdown from "react-markdown";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className="markdown">
      <h2>Ainekset</h2>
      <Markdown>{ingredients}</Markdown>
    </div>
  );
};

export default RecipeIngredients;
