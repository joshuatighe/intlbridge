"use client";

import { useActionState } from "react";
import { toast } from "sonner";
import { FieldError } from "@/components/form/field-error";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
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
import { COLLEGES } from "../constants";

type ApplicationUpsertFormProps = {
  application?: Application;
};

const ApplicationUpsertForm = ({ application }: ApplicationUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertApplication.bind(null, application?.id),
    EMPTY_ACTION_STATE,
  );

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });

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
          {COLLEGES.map((college) => (
            <SelectItem key={college} value={college}>
              {college}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError actionState={actionState} name="college" />

      <Label htmlFor="notes">Notes</Label>
      <Textarea
        id="notes"
        name="notes"
        defaultValue={
          (actionState.payload?.get("notes") as string) ?? application?.notes
        }
      />
      <FieldError actionState={actionState} name="notes" />

      <SubmitButton label={application ? "Edit" : "Create"} />
    </form>
  );
};

export { ApplicationUpsertForm };
