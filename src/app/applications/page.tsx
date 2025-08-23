import clsx from "clsx";
import { ListChecks, PencilLine, SquareX } from "lucide-react";
import Link from "next/link";
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
          <div
            key={application.id}
            className="w-full max-w-[420px] p-4 border border-slate-100 rounded-xl"
          >
            <div>{APPLICATION_ICONS[application.status]}</div>
            <h3 className="text-lg font-semibold truncate">
              {application.title}
            </h3>
            <p
              className={clsx("text-sm text-slate-400 truncate", {
                "line-through": application.status === "APPLIED",
              })}
            >
              {application.content}
            </p>

            <Link
              href={applicationPath(application.id)}
              className="text-sm underline"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
