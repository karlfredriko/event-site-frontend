import { FC } from "react";
import { IActivity } from "../models/IActivity";

import s from "./ActivityFullCard.module.css";

type ActivityFullCardProps = {
  activity: IActivity;
};

const ActivityFullCard: FC<ActivityFullCardProps> = ({ activity }) => {
  return (
    <section className={s.container}>
      <div className={s.rowContainer}>
        <img className={s.img} {...activity.image} />
        <div className={s.textContainer}>
          <h2 className={s.name}>{activity.name}</h2>
          <h2 className={s.description}>{activity.description}</h2>
        </div>
      </div>
      <h3 className={s.text}>{activity.text.blockOne}</h3>
      <h3 className={s.text}>{activity.text.blockTwo}</h3>
    </section>
  );
};

export default ActivityFullCard;
