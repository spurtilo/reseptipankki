import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <img
          src="/recipe_bank_header.png"
          alt="page header image"
          className="header-image"
        />
      </div>
      <div className="navbar">
        <Link to={"/"}>Reseptit</Link>
        <Link to={"/recipeform"}>Syötä resepti</Link>
      </div>
    </div>
  );
};

export default Header;
