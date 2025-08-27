import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialApplications } from "@/data";
import { ApplicationItem } from "@/features/application/components/application-item";
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
    <div className="flex justify-center animate-fade-from-top">
      <ApplicationItem application={application} isDetail />
    </div>
  );
};

export default ApplicationsPage;
