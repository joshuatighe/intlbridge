import clsx from "clsx";
import { ListChecks, PencilLine, SquareX } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialApplications } from "@/data";
import { applicationPath } from "@/paths";

const APPLICATION_ICONS = {
  APPLIED: <ListChecks />,
  IN_PROGRESS: <PencilLine />,
  NOT_BEGUN: <SquareX />,
};

const ApplicationsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Applications Page</h2>
        <p className="text-sm text-white/80">
          All your applications in one place
        </p>
      </div>

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
