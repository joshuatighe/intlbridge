import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { applicationsPath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      label="Application not found"
      button={
        <Button asChild variant="outline">
          <Link href={applicationsPath()}>Go to Applications</Link>
        </Button>
      }
    />
  );
}
