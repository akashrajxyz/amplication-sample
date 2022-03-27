import { Organisation } from "../organisation/Organisation";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organisationsNo?: Array<Organisation>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
