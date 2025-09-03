"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { applicationsPath } from "@/paths";

const deleteApplication = async (id: string) => {
  await prisma.application.delete({
    where: {
      id,
    },
  });

  revalidatePath(applicationsPath());
  redirect(applicationsPath());
};

export { deleteApplication };
