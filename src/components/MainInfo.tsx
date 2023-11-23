import { FC } from "react";
import { IBaseInfo } from "../models/IBaseInfo";
import { useNavigate } from "react-router-dom";

import s from "./MainInfo.module.css";

type MainInfoProps = {
  data: IBaseInfo;
};

const MainInfo: FC<MainInfoProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/tickets");
  };

  const { name, slogan, date, time, location, city, ticketsSold } = data;
  return (
    <section className={s.container} onClick={handleNav}>
      <h1 className={s.name}>{name}&#8482;</h1>
      <h2 className={s.slogan}>{`- ${slogan}`}</h2>
      <h2 className={s.text}>
        Biljetter tillgängliga!
        {ticketsSold && ticketsSold > 1 ? (
          <>
            <br />
            Över {ticketsSold - 1} biljetter sålda!
          </>
        ) : null}
      </h2>
      <h2 className={s.location}>{`${location} - ${city}`}</h2>
      <h2 className={s.date}>{`${date} - Lördag`}</h2>
      <h2 className={s.time}>{`Dörrarna öppnar ${time}`}</h2>
    </section>
  );
};

export default MainInfo;
