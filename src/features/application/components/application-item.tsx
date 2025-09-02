import clsx from "clsx";
import { LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { applicationPath } from "@/paths";
import { APPLICATION_ICONS } from "../constants";
import type { Application } from "../types";

type ApplicationItemProps = {
  application: Application;
  isDetail?: boolean;
};

const ApplicationItem = ({ application, isDetail }: ApplicationItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild className="flex-1">
      <Link href={applicationPath(application.id)}>
        <LucideExternalLink />
      </Link>
    </Button>
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
            <span className="truncate">{application.uni}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {application.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export { ApplicationItem };
