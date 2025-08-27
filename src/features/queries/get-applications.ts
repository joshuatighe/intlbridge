import { initialApplications } from "@/data";
import type { Application } from "../application/types";

export const getApplications = async (): Promise<Application[]> => {
  await new Promise((res) => setTimeout(res, 2000));

  return new Promise((res) => {
    res(initialApplications);
  });
};
