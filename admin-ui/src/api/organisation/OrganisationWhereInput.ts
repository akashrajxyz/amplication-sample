import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganisationWhereInput = {
  id?: StringFilter;
  organisationNo?: StringNullableFilter;
  user?: UserListRelationFilter;
};
