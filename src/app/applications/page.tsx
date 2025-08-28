import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Loader } from "@/components/loader";
import { ApplicationList } from "@/features/application/components/application-list";

const ApplicationsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Applications"
        description="All your college applications in one place"
      />

      <Suspense fallback={<Loader label="Loading applications" />}>
        <ApplicationList />
      </Suspense>
    </div>
  );
};

export default ApplicationsPage;
