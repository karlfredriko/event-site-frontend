import { ReactNode, useEffect, useState } from "react";
import { getData } from "../utils/httpClient";
import { IBaseInfo } from "../models/IBaseInfo";
import { IBaseInfoResponse } from "../utils/IBaseInfoResponse";
import MainInfo from "../components/MainInfo";
import { ITicketsSold } from "../models/ITicketsSold";
import { ITicketsSoldResponse } from "../utils/ITicketsSoldResponse";

const HomePage = () => {
  const [baseInfo, setBaseInfo] = useState<IBaseInfo>();
  const [ticketsSold, setTicketsSold] = useState<ITicketsSold>();
  useEffect(() => {
    const fetchBaseInfo = async () => {
      try {
        const data = await getData<IBaseInfoResponse>("start");
        setBaseInfo(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchTicketsSold = async () => {
      try {
        const tickets = await getData<ITicketsSoldResponse>("tickets");
        setTicketsSold(tickets.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBaseInfo();
    fetchTicketsSold();
  }, []);

  let content: ReactNode;
  if (baseInfo && ticketsSold) {
    content = <MainInfo data={{ ...baseInfo, ...ticketsSold }} />;
  }

  return <>{content}</>;
};

export default HomePage;
