import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganisationListRelationFilter } from "../organisation/OrganisationListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  organisationsNo?: OrganisationListRelationFilter;
  username?: StringFilter;
};
