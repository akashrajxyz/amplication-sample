import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganisationWhereInput = {
  id?: StringFilter;
  organisationName?: StringFilter;
  users?: UserListRelationFilter;
};
