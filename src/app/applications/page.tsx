"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/components/heading";
import { ApplicationItem } from "@/features/application/components/application-item";
import type { Application } from "@/features/application/types";
import { getApplications } from "@/features/queries/get-applications";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await getApplications();

      setApplications(res);
    };

    fetchApplications();
  });

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Applications"
        description="All your college applications in one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {applications.map((application) => (
          <ApplicationItem key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
