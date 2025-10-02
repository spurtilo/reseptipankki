import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <div>
        <img
          src="/recipe_bank_header.png"
          alt="page header image"
          className="header-image"
        />
      </div> */}
      <div className="navbar">
        <Link to={"/"}>
          {" "}
          <img
            src="/recipe_bank_v2.png"
            alt="page header image"
            className="navbar-image"
          />
        </Link>
        <Link to={"/recipeform"}>SYÖTÄ RESEPTI</Link>
      </div>
    </div>
  );
};

export default Header;
