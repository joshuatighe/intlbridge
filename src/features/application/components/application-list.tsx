import { getApplications } from "@/features/queries/get-applications";
import { ApplicationItem } from "./application-item";

const ApplicationList = async () => {
  const applications = await getApplications();

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
      {applications.map((application) => (
        <ApplicationItem key={application.id} application={application} />
      ))}
    </div>
  );
};

export { ApplicationList };
