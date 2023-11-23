import { Link } from "react-router-dom";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        u
        <div className={s.logoContainer}>
          <Link className={s.logo} to={"/"}>
            <img className={s.logo} src="/assets/mars.svg" alt="Mars logo" />
            <b className={s.logo}>MarsCon &#8482;</b>
          </Link>
        </div>
        <div className={s.navContainer}>
          <Link to={"/"}>Hem</Link>
          <Link to={"/activities"}>Aktiviteter</Link>
          <Link to={"/tickets"}>Biljetter</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
