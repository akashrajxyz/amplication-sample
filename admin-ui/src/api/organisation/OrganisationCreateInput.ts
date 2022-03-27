import { UserCreateNestedManyWithoutOrganisationsInput } from "./UserCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  organisationName: string;
  users?: UserCreateNestedManyWithoutOrganisationsInput;
};
