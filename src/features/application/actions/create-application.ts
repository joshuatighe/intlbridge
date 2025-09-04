"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { applicationsPath } from "@/paths";

export const createApplication = async (formData: FormData) => {
  const data = {
    college: formData.get("college"),
    notes: formData.get("notes"),
  };

  await prisma.application.create({
    data: {
      college: data.college as string,
      notes: data.notes as string,
    },
  });

  revalidatePath(applicationsPath());
};
