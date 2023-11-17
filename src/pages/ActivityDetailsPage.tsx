import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IActivityResponse } from "../utils/IActivityResponse";
import { IActivity } from "../models/IActivity";
import { getData } from "../utils/httpClient";

const ActivityDetailsPage = () => {
  const [activity, setActivity] = useState<IActivity>();
  const { id } = useParams();
  useEffect(() => {
    const fetchActivity = async () => {
      console.log(id);
      const data = await getData<IActivityResponse>(`activities/${id}`);
      setActivity(data.data);
    };
    fetchActivity();
  }, []);
  return (
    <>
      <div>ActivityDetailsPage</div>
      <div>{activity && activity.name}</div>
    </>
  );
};

export default ActivityDetailsPage;
