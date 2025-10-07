"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  type ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { applicationPath, applicationsPath } from "@/paths";

const upsertApplicationSchema = z.object({
  college: z.string().min(1, "College field is required"),
  notes: z.string().min(1, "Please enter some notes").max(1024),
});

export const upsertApplication = async (
  id: string | undefined,
  _actionState: ActionState,
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
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(applicationsPath());

  if (id) {
    redirect(applicationPath(id));
  }

  return toActionState("SUCCESS", "Application created");
};
