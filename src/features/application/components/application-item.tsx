import clsx from "clsx";
import { LucideExternalLink, LucideX } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Application } from "@/generated/prisma/client";
import { applicationPath } from "@/paths";
import { deleteApplication } from "../actions/delete-application";
import { APPLICATION_ICONS } from "../constants";

type ApplicationItemProps = {
  application: Application;
  isDetail?: boolean;
};

const ApplicationItem = ({ application, isDetail }: ApplicationItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={applicationPath(application.id)}>
        <LucideExternalLink className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteApplication.bind(null, application.id)}>
      <Button variant="outline" size="icon">
        <LucideX className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card key={application.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2 items-center">
            <span>{APPLICATION_ICONS[application.status]}</span>
            <span>{application.college}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {application.notes}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export { ApplicationItem };
