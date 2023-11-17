import { useEffect, useState } from "react";
import { getData } from "../utils/httpClient";
import { IBaseInfo } from "../models/IBaseInfo";
import { IBaseInfoResponse } from "../utils/IBaseInfoResponse";

const HomePage = () => {
  const [baseInfo, setBaseInfo] = useState<IBaseInfo>();
  useEffect(() => {
    const fetchBaseInfo = async () => {
      const data = await getData<IBaseInfoResponse>("start");
      setBaseInfo(data.data);
      //   try {
      //     const data = await getData<IBaseInfoResponse>("start");
      //     setBaseInfo(data.data);
      //   } catch (error) {
      //     console.log(error);
      //   }
    };
    fetchBaseInfo();
  }, []);
  return (
    <>
      {baseInfo && (
        <>
          <div>{/* <h1>{baseInfo.tag-line}</h1> */}</div>
          <div>
            <h1>{baseInfo.name}</h1>
            <h2>{`${baseInfo.date} - ${baseInfo.time}`}</h2>
            <p>{`${baseInfo.location}`}</p>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
