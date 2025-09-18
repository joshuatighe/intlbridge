"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { applicationPath, applicationsPath } from "@/paths";

const upsertApplicationSchema = z.object({
  college: z.string(),
  notes: z.string().min(1).max(1024),
});

export const upsertApplication = async (
  id: string | undefined,
  _actionState: { message: string },
  formData: FormData,
) => {
  try {
    const data = upsertApplicationSchema.parse({
      college: formData.get("college"),
      notes: formData.get("notes"),
    });

    await prisma.application.upsert({
      where: {
        id: id || "",
      },
      update: data,
      create: data,
    });
  } catch (_error) {
    return { message: "Something went wrong" };
  }

  revalidatePath(applicationsPath());

  if (id) {
    redirect(applicationPath(id));
  }

  return { message: "Application created" };
};
