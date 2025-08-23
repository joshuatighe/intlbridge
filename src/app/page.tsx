import Link from "next/link";
import { Heading } from "@/components/heading";
import { applicationsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="intlbridge"
        description="Helping your US college dreams come true as an international student 🇺🇸"
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href={applicationsPath()} className="underline">
          Go to Applications
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
