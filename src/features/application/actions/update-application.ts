"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { applicationsPath } from "@/paths";

const updateApplication = async (id: string, formData: FormData) => {
  const data = {
    college: formData.get("college"),
    notes: formData.get("notes"),
  };

  await prisma.application.update({
    where: {
      id,
    },
    data: {
      college: data.college as string,
      notes: data.notes as string,
    },
  });

  revalidatePath(applicationsPath());
  redirect(applicationsPath());
};

export { updateApplication };
