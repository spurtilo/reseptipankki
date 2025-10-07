import Markdown from "react-markdown";

const RecipeInstructions = ({ instructions }) => {
  return (
    <div className="markdown-instructions">
      <h2>Valmistus</h2>
      <Markdown>{instructions}</Markdown>
    </div>
  );
};

export default RecipeInstructions;
