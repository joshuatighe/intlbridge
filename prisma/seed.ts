import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const applications = [
  {
    uni: "University of Notre Dame",
    content: "This is the first application from the database",
    status: "APPLIED" as const,
  },
  {
    uni: "Boston College",
    content: "This is the second application from the database",
    status: "IN_PROGRESS" as const,
  },
  {
    uni: "Virginia Tech",
    content: "This is the third application from the database",
    status: "NOT_BEGUN" as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("db seed: started...");

  await prisma.application.deleteMany();

  await prisma.application.createMany({
    data: applications,
  });

  const t1 = performance.now();
  console.log(`db seed: finished in ${((t1 - t0) / 1000).toFixed(2)}s`);
};

seed();
