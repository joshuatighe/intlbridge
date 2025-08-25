export type ApplicationStatus = "APPLIED" | "IN_PROGRESS" | "NOT_BEGUN";

export type Application = {
  id: string;
  title: string;
  content: string;
  status: ApplicationStatus;
};
