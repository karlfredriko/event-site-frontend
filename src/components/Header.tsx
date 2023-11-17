import { Link } from "react-router-dom";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.container}>
          <Link className={s.logo} to={"/"}>
            <img
              className={s.logo}
              src="/public/assets/mars.svg"
              alt="Mars logo"
            />
            <b>MarsCon &#8482;</b>
          </Link>
        </div>
        <div className={s.container}>
          <Link to={"/"}>Hem</Link>
          <Link to={"/activities"}>Aktiviteter</Link>
          <Link to={"/tickets"}>Biljetter</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
