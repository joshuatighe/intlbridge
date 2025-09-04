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
import { createApplication } from "../actions/create-application";

const ApplicationCreateForm = () => {
  return (
    <form action={createApplication} className="flex flex-col gap-y-3">
      <Label htmlFor="college">College</Label>
      <Select name="college">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a college" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Stanford">Stanford</SelectItem>
          <SelectItem value="Massachusetts Institute of Technology">
            Massachusetts Institute of Technology
          </SelectItem>
        </SelectContent>
      </Select>

      <Label htmlFor="notes">Notes</Label>
      <Textarea id="notes" name="notes" />

      <Button type="submit">Create</Button>
    </form>
  );
};

export { ApplicationCreateForm };
