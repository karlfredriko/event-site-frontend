import { IActivity } from "../models/IActivity";
import { IBaseServerResponse } from "./IBaseServerResponse";

export interface IActivitiesResponse extends IBaseServerResponse {
  data: IActivity[];
}
