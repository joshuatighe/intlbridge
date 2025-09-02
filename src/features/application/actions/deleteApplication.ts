"use server";

import { prisma } from "@/lib/prisma";

const deleteApplication = async (id: string) => {
  await prisma.application.delete({
    where: {
      id,
    },
  });
};

export { deleteApplication };
