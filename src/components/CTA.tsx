import { FC } from "react";
import { IBaseInfo } from "../models/IBaseInfo";

import s from "./CTA.module.css";
import { useNavigate } from "react-router-dom";

type CTAProps = {
  data: IBaseInfo;
};

const CTA: FC<CTAProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/tickets");
  };

  const { name, slogan, date, time, location, city } = data;
  return (
    <div className={s.container} onClick={handleNav}>
      <h1 className={s.name}>{name}&#8482;</h1>
      <h2 className={s.slogan}>{slogan}</h2>
      <h2 className={s.dateAndTime}>{`${date} - Lördag`}</h2>
      <h2 className={s.dateAndTime}>{`Dörrarna öppnar ${time}`}</h2>
      <h2 className={s.location}>{`${location} - ${city}`}</h2>
      <h2 className={s.text}>Köp dina biljetter nu!</h2>
    </div>
  );
};

export default CTA;
