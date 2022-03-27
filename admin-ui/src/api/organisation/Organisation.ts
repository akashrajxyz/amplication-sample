import { User } from "../user/User";

export type Organisation = {
  createdAt: Date;
  id: string;
  organisationNo: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
