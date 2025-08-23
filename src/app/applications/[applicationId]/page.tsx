import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialApplications } from "@/data";
import { applicationsPath } from "@/paths";

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

  if (!application) {
    return (
      <Placeholder
        label="Application not found"
        button={
          <Button asChild variant="outline">
            <Link href={applicationsPath()}>Go to Applications</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h2 className="text-lg">{application?.title}</h2>
      <p className="text-sm">{application?.content}</p>
    </div>
  );
};

export default ApplicationsPage;
