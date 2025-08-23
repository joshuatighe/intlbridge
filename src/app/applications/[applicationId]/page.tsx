import { initialApplications } from "@/data";

type ApplicationPageProps = {
  params: Promise<{
    applicationId: string;
  }>;
};

const ApplicationsPage = async ({ params }: ApplicationPageProps) => {
  const { applicationId } = await params;
  const application = initialApplications.find(
    (application) => application.id === applicationId,
  );

  if (!application) return <div>No ticket found</div>;

  return (
    <div>
      <h2 className="text-lg">{application?.title}</h2>
      <p className="text-sm">{application?.content}</p>
    </div>
  );
};

export default ApplicationsPage;
