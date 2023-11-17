import { IActivity } from "../models/IActivity";
import { IBaseServerResponse } from "./IBaseServerResponse";

export interface IActivityResponse extends IBaseServerResponse {
  data: IActivity;
}
