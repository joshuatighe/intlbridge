import { prisma } from "@/lib/prisma";

const getApplication = async (id: string) => {
  return await prisma.application.findUnique({
    where: {
      id,
    },
  });
};

export { getApplication };
