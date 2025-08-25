import { LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { applicationPath } from "@/paths";
import { APPLICATION_ICONS } from "../constants";
import type { Application } from "../types";

type ApplicationItemProps = {
  application: Application;
};

const ApplicationItem = ({ application }: ApplicationItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild className="flex-1">
      <Link href={applicationPath(application.id)}>
        <LucideExternalLink />
      </Link>
    </Button>
  );

  return (
    <div className="w-full max-w-[420px] flex gap-x-1">
      <Card key={application.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2 items-center">
            <span>{APPLICATION_ICONS[application.status]}</span>
            <span className="truncate">{application.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="line-clamp-3">{application.content}</span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">{detailButton}</div>
    </div>
  );
};

export { ApplicationItem };
