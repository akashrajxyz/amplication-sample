import { Organisation as TOrganisation } from "../api/organisation/Organisation";

export const ORGANISATION_TITLE_FIELD = "organisationName";

export const OrganisationTitle = (record: TOrganisation): string => {
  return record.organisationName || record.id;
};
