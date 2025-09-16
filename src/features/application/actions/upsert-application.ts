"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { applicationPath, applicationsPath } from "@/paths";

const upsertApplication = async (
  id: string | undefined,
  formData: FormData,
) => {
  const data = {
    college: formData.get("college") as string,
    notes: formData.get("notes") as string,
  };

  await prisma.application.upsert({
    where: {
      id: id || "",
    },
    update: data,
    create: data,
  });

  revalidatePath(applicationsPath());

  if (id) {
    redirect(applicationPath(id));
  }
};

export { upsertApplication };
