import { ITicketInfo } from "../models/ITicketInfo";
import { IBaseServerResponse } from "./IBaseServerResponse";

export interface ITicketInfoResponse extends IBaseServerResponse {
  data: ITicketInfo;
}
