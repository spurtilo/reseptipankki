import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        {" "}
        <img
          src="/images/navbar_image.png"
          alt="navbar logo image"
          className="navbar-image"
        />
      </Link>
      <Link to={"/addrecipe"}>SYÖTÄ RESEPTI</Link>
    </div>
  );
};

export default Header;
