"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setCookieByKey } from "@/actions/cookies";
import { prisma } from "@/lib/prisma";
import { applicationsPath } from "@/paths";

const deleteApplication = async (id: string) => {
  await prisma.application.delete({
    where: {
      id,
    },
  });

  revalidatePath(applicationsPath());
  await setCookieByKey("toast", "Application deleted");
  redirect(applicationsPath());
};

export { deleteApplication };
