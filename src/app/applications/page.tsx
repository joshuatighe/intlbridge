import { Suspense } from "react";
import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { Loader } from "@/components/loader";
import { ApplicationCreateForm } from "@/features/application/components/application-create-form";
import { ApplicationList } from "@/features/application/components/application-list";

const ApplicationsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Applications"
        description="Keep track of all your college applications in one place"
      />

      <CardCompact
        title="Create Application"
        description="Create a new college application to keep track of"
        content={<ApplicationCreateForm />}
        className="w-full max-w-[420px] self-center"
      />

      <Suspense fallback={<Loader label="Loading applications" />}>
        <ApplicationList />
      </Suspense>
    </div>
  );
};

export default ApplicationsPage;
