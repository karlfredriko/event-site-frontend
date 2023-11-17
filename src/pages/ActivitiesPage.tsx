import { useEffect, useState } from "react";
import { getData } from "../utils/httpClient";
import { IActivitiesResponse } from "../utils/IActivitiesResponse";
import { IActivity } from "../models/IActivity";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getData<IActivitiesResponse>("activities");
      console.log(data.data);
      setActivities(data.data);
    };
    fetchActivities();
  }, []);

  return (
    <>
      <div>ActivitiesPage</div>
      <div>{activities && activities.length}</div>
    </>
  );
};

export default ActivitiesPage;
