import { ReactNode, useEffect, useState } from "react";
import { getData } from "../utils/httpClient";
import { IActivitiesResponse } from "../utils/IActivitiesResponse";
import { IActivity } from "../models/IActivity";
import ActivityPreCard from "../components/ActivityPreCard";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getData<IActivitiesResponse>("activities");
        setActivities(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchActivities();
  }, []);

  let content: ReactNode;
  if (activities) {
    content = (
      <>
        <br />
        {activities.map((activity) => (
          <ActivityPreCard key={activity.id} activity={activity} />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="transparent-background">{content}</div>
    </>
  );
};

export default ActivitiesPage;
