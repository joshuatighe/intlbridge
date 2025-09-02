import { prisma } from "@/lib/prisma";

export const getApplications = async () => {
  return await prisma.application.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
