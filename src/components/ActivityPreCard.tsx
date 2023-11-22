import { FC } from "react";
import { IActivity } from "../models/IActivity";

import s from "./ActivityPreCard.module.css";
import { useNavigate } from "react-router-dom";

type ActivityPreCardProps = {
  activity: IActivity;
};

const ActivityPreCard: FC<ActivityPreCardProps> = ({ activity }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activities/${activity.id}`);
  };

  return (
    <section className={s.container} onClick={handleClick}>
      <img className={s.img} {...activity.image} />
      <div className={s.textContainer}>
        <h2 className={s.name}>{activity.name}</h2>
        <h2 className={s.description}>{activity.description}</h2>
      </div>
    </section>
  );
};

export default ActivityPreCard;
