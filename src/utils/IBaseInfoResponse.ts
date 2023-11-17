import { IBaseInfo } from "../models/IBaseInfo";
import { IBaseServerResponse } from "./IBaseServerResponse";

export interface IBaseInfoResponse extends IBaseServerResponse {
  data: IBaseInfo;
}
