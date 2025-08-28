import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ApplicationItem } from "@/features/application/components/application-item";
import { getApplication } from "@/features/queries/get-application";
import { applicationsPath } from "@/paths";

type ApplicationPageProps = {
  params: Promise<{
    applicationId: string;
  }>;
};

const ApplicationsPage = async ({ params }: ApplicationPageProps) => {
  const application = await getApplication((await params).applicationId);

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
