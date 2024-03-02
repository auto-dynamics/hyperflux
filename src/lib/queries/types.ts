import { ProcessScheme } from "..";

export interface QueryResponseStatus {
  status: string;
}

export interface InsertSchemeBody {
  name: string;
  scheme: ProcessScheme;
}
