import { Organisation as TOrganisation } from "../api/organisation/Organisation";

export const ORGANISATION_TITLE_FIELD = "organisationNo";

export const OrganisationTitle = (record: TOrganisation): string => {
  return record.organisationNo || record.id;
};
