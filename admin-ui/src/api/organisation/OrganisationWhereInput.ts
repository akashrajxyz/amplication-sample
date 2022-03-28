import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganisationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
