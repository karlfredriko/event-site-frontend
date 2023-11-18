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

  const { name, slogan, date, time, location, city } = data;
  return (
    <section className={s.container} onClick={handleNav}>
      <h1 className={s.name}>{name}&#8482;</h1>
      <h2 className={s.slogan}>{slogan}</h2>
      <h2 className={s.dateAndTime}>{`${date} - Lördag`}</h2>
      <h2 className={s.dateAndTime}>{`Dörrarna öppnar ${time}`}</h2>
      <h2 className={s.location}>{`${location} - ${city}`}</h2>
      <h2 className={s.text}>Köp dina biljetter nu!</h2>
    </section>
  );
};

export default MainInfo;
