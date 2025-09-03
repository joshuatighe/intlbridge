"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { applicationsPath } from "@/paths";

const deleteApplication = async (id: string) => {
  await prisma.application.delete({
    where: {
      id,
    },
  });

  redirect(applicationsPath());
};

export { deleteApplication };
