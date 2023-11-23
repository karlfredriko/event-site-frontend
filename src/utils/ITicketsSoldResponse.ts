import { ITicketsSold } from "../models/ITicketsSold";
import { IBaseServerResponse } from "./IBaseServerResponse";

export interface ITicketsSoldResponse extends IBaseServerResponse {
  data: ITicketsSold;
}
