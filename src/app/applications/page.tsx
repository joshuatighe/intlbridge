import {
  LucideListChecks,
  LucidePencilLine,
  LucideSquareX,
} from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialApplications } from "@/data";
import { applicationPath } from "@/paths";

const APPLICATION_ICONS = {
  APPLIED: <LucideListChecks />,
  IN_PROGRESS: <LucidePencilLine />,
  NOT_BEGUN: <LucideSquareX />,
};

const ApplicationsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Applications"
        description="All your college applications in one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialApplications.map((application) => (
          <Card key={application.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2 items-center">
                <span>{APPLICATION_ICONS[application.status]}</span>
                <span className="truncate">{application.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3">{application.content}</span>
            </CardContent>
            <CardFooter>
              <Link
                href={applicationPath(application.id)}
                className="text-sm underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
