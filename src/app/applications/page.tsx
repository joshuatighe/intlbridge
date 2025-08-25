import { Heading } from "@/components/heading";
import { initialApplications } from "@/data";
import { ApplicationItem } from "@/features/application/components/application-item";

const ApplicationsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Applications"
        description="All your college applications in one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialApplications.map((application) => (
          <ApplicationItem key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
