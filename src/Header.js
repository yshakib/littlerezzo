import Nav from "./Nav.js";
import "./Nav.css";

const Header = () => {
  return (
    <header className="container">
      <img className="header-logo" src="Logo.svg" alt="Little Lemon logo" />
      <Nav />
    </header>
  );
}

export default Header;
