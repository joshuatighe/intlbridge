"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/form/submit-button";
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
  const [actionState, action] = useActionState(
    upsertApplication.bind(null, application?.id),
    {
      message: "",
    },
  );

  return (
    <form action={action} className="flex flex-col gap-y-3">
      <Label htmlFor="college">College</Label>
      <Select
        name="college"
        defaultValue={
          (actionState.payload?.get("college") as string) ??
          application?.college
        }
      >
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
      <Textarea
        id="notes"
        name="notes"
        defaultValue={
          (actionState.payload?.get("notes") as string) ?? application?.notes
        }
      />

      <SubmitButton label={application ? "Edit" : "Create"} />

      {actionState.message}
    </form>
  );
};

export { ApplicationUpsertForm };
