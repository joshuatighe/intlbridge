export const homePath = () => "/";

export const applicationsPath = () => "/applications";
export const applicationPath = (applicationId: string) =>
  `/applications/${applicationId}`;
export const applicationEditPath = (applicationId: string) =>
  `/applications/${applicationId}/edit`;
