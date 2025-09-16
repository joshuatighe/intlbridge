import { notFound } from "next/navigation";
import { CardCompact } from "@/components/card-compact";
import { ApplicationUpsertForm } from "@/features/application/components/application-upsert-form";
import { getApplication } from "@/features/queries/get-application";

type ApplicationEditPageProps = {
  params: Promise<{
    applicationId: string;
  }>;
};

const ApplicationEditPage = async ({ params }: ApplicationEditPageProps) => {
  const { applicationId } = await params;
  const application = await getApplication(applicationId);

  if (!application) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Edit Application"
        description="Edit an existing application"
        className="w-full max-w-[420px] animate-fade-from-top"
        content={<ApplicationUpsertForm application={application} />}
      />
    </div>
  );
};

export default ApplicationEditPage;
