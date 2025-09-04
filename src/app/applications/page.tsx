import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Loader } from "@/components/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ApplicationCreateForm } from "@/features/application/components/application-create-form";
import { ApplicationList } from "@/features/application/components/application-list";

const ApplicationsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Applications"
        description="Keep track of all your college applications in one place"
      />

      <Card className="w-full max-w-[420px] self-center">
        <CardHeader>
          <CardTitle>Create Application</CardTitle>
          <CardDescription>
            Create a new college application to keep track of
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ApplicationCreateForm />
        </CardContent>
      </Card>

      <Suspense fallback={<Loader label="Loading applications" />}>
        <ApplicationList />
      </Suspense>
    </div>
  );
};

export default ApplicationsPage;
