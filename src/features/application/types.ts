export type ApplicationStatus = "APPLIED" | "IN_PROGRESS" | "NOT_BEGUN";

export type Application = {
  id: string;
  uni: string;
  content: string;
  status: ApplicationStatus;
};
