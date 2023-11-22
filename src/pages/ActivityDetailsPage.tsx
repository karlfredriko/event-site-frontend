import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IActivityResponse } from "../utils/IActivityResponse";
import { IActivity } from "../models/IActivity";
import { getData } from "../utils/httpClient";
import ActivityFullCard from "../components/ActivityFullCard";

const ActivityDetailsPage = () => {
  const [activity, setActivity] = useState<IActivity>();
  const { id } = useParams();
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await getData<IActivityResponse>(`activities/${id}`);
        setActivity(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchActivity();
  }, []);

  let content: ReactNode;
  if (activity) {
    content = <ActivityFullCard activity={activity} />;
  }
  return <>{content}</>;
};

export default ActivityDetailsPage;
