import { ReactNode, useEffect, useState } from "react";
import { getData } from "../utils/httpClient";
import { IBaseInfo } from "../models/IBaseInfo";
import { IBaseInfoResponse } from "../utils/IBaseInfoResponse";
import CTA from "../components/CTA";

const HomePage = () => {
  const [baseInfo, setBaseInfo] = useState<IBaseInfo>();
  useEffect(() => {
    const fetchBaseInfo = async () => {
      const data = await getData<IBaseInfoResponse>("start");
      setBaseInfo(data.data);
      try {
        const data = await getData<IBaseInfoResponse>("start");
        setBaseInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBaseInfo();
  }, []);

  let content: ReactNode;
  if (baseInfo) {
    content = <CTA data={baseInfo} />;
  }

  return <>{content}</>;
};

export default HomePage;
