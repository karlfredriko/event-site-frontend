import { FC } from "react";
import { IActivity } from "../models/IActivity";

import s from "./ActivityPreCard.module.css";

type ActivityPreCardProps = {
  activity: IActivity;
};

const ActivityPreCard: FC<ActivityPreCardProps> = ({ activity }) => {
  return (
    <section className={s.container}>
      <img
        className={s.img}
        src="/assets/mars-planet.png"
        alt="planet mars in space"
      />
      <div className={s.textContainer}>
        <h2 className={s.name}>{activity.name}</h2>
        <h2 className={s.description}>{activity.description}</h2>
      </div>
    </section>
  );
};

export default ActivityPreCard;
