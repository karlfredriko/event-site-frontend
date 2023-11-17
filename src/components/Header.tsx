import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Hem</Link>
        <Link to={"/activities"}>Aktiviteter</Link>
      </nav>
    </header>
  );
};

export default Header;