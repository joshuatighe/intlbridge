"use client";

import { LucideLoaderCircle } from "lucide-react";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Application } from "@/generated/prisma";
import { upsertApplication } from "../actions/upsert-application";

type ApplicationUpsertFormProps = {
  application?: Application;
};

const ApplicationUpsertForm = ({ application }: ApplicationUpsertFormProps) => {
  const [isPending, startTransition] = useTransition();

  const upsertApplicationAction = (formData: FormData) => {
    startTransition(async () => {
      await upsertApplication.bind(null, application?.id)(formData);
    });
  };

  return (
    <form action={upsertApplicationAction} className="flex flex-col gap-y-3">
      <Label htmlFor="college">College</Label>
      <Select name="college" defaultValue={application?.college}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Stanford">Stanford</SelectItem>
          <SelectItem value="Massachusetts Institute of Technology">
            Massachusetts Institute of Technology
          </SelectItem>
          <SelectItem value="University of Notre Dame">
            University of Notre Dame
          </SelectItem>
        </SelectContent>
      </Select>

      <Label htmlFor="notes">Notes</Label>
      <Textarea id="notes" name="notes" defaultValue={application?.notes} />

      <Button disabled={isPending} type="submit">
        {isPending && <LucideLoaderCircle className="h-4 w-4 animate-spin" />}
        {application ? "Edit" : "Create"}
      </Button>
    </form>
  );
};

export { ApplicationUpsertForm };
