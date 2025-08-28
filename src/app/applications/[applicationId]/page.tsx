import { notFound } from "next/navigation";
import { ApplicationItem } from "@/features/application/components/application-item";
import { getApplication } from "@/features/queries/get-application";

type ApplicationPageProps = {
  params: Promise<{
    applicationId: string;
  }>;
};

const ApplicationsPage = async ({ params }: ApplicationPageProps) => {
  const application = await getApplication((await params).applicationId);

  if (!application) {
    return notFound();
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <ApplicationItem application={application} isDetail />
    </div>
  );
};

export default ApplicationsPage;
