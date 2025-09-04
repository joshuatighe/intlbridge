import { prisma } from "@/lib/prisma";

const applications = [
  {
    college: "University of Notre Dame",
    notes: "This is the first application from the database",
    status: "APPLIED" as const,
  },
  {
    college: "Boston College",
    notes: "This is the second application from the database",
    status: "IN_PROGRESS" as const,
  },
  {
    college: "Virginia Tech",
    notes: "This is the third application from the database",
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
