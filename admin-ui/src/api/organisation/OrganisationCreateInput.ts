import { UserCreateNestedManyWithoutOrganisationsInput } from "./UserCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  organisationNo?: string | null;
  user?: UserCreateNestedManyWithoutOrganisationsInput;
};
