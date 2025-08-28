import { initialApplications } from "@/data";
import type { Application } from "../application/types";

const getApplication = async (
  applicationId: string,
): Promise<Application | null> => {
  await new Promise((res) => setTimeout(res, 2000));

  const application = initialApplications.find(
    (application) => application.id === applicationId,
  );

  return new Promise((res) => {
    res(application || null);
  });
};

export { getApplication };
