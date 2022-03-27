import { User } from "../user/User";

export type Organisation = {
  createdAt: Date;
  id: string;
  organisationName: string;
  updatedAt: Date;
  users?: Array<User>;
};
