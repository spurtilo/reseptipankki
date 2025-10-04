const RecipeNavbar = ({ setActiveSection }) => {
  return (
    <div className="recipe-navbar">
      <div
        className="recipe-navbar-button1"
        onClick={() => setActiveSection("ingredients")}
      >
        AINEKSET
      </div>
      <div
        className="recipe-navbar-button2"
        onClick={() => setActiveSection("instructions")}
      >
        VALMISTUS
      </div>
    </div>
  );
};

export default RecipeNavbar;
