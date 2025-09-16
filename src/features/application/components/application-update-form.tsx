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
import { updateApplication } from "../actions/update-application";

type ApplicationUpdateFormProps = {
  application: Application;
};

const ApplicationUpdateForm = ({ application }: ApplicationUpdateFormProps) => {
  return (
    <form
      action={updateApplication.bind(null, application.id)}
      className="flex flex-col gap-y-3"
    >
      <Label htmlFor="college">College</Label>
      <Select name="college" defaultValue={application.college}>
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
      <Textarea id="notes" name="notes" defaultValue={application.notes} />

      <Button type="submit">Update</Button>
    </form>
  );
};

export { ApplicationUpdateForm };
