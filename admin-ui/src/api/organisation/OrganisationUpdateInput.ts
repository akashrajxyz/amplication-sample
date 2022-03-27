import { UserUpdateManyWithoutOrganisationsInput } from "./UserUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  organisationName?: string;
  users?: UserUpdateManyWithoutOrganisationsInput;
};
