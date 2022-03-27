import { OrganisationUpdateManyWithoutUsersInput } from "./OrganisationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  organisationsNo?: OrganisationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
