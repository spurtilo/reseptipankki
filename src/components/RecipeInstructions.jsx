const RecipeInstructions = ({ name, instructions }) => {
  return (
    <div>
      <h2>Valmistus</h2>
      {instructions.map((inst, i) => (
        <p key={i}>{inst}</p>
      ))}
    </div>
  );
};

export default RecipeInstructions;
