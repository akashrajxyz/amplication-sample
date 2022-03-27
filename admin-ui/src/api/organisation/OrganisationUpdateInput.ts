import { UserUpdateManyWithoutOrganisationsInput } from "./UserUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  organisationNo?: string | null;
  user?: UserUpdateManyWithoutOrganisationsInput;
};
