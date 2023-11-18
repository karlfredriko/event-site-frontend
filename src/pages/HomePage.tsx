import { ReactNode, useEffect, useState } from "react";
import { getData } from "../utils/httpClient";
import { IBaseInfo } from "../models/IBaseInfo";
import { IBaseInfoResponse } from "../utils/IBaseInfoResponse";
import MainInfo from "../components/MainInfo";

const HomePage = () => {
  const [baseInfo, setBaseInfo] = useState<IBaseInfo>();
  useEffect(() => {
    const fetchBaseInfo = async () => {
      const data = await getData<IBaseInfoResponse>("start");
      setBaseInfo(data.data);
      try {
        const data = await getData<IBaseInfoResponse>("start");
        setBaseInfo(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBaseInfo();
  }, []);

  let content: ReactNode;
  if (baseInfo) {
    content = <MainInfo data={baseInfo} />;
  }

  return <>{content}</>;
};

export default HomePage;
