import { OrganisationCreateNestedManyWithoutUsersInput } from "./OrganisationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  organisationsNo?: OrganisationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
