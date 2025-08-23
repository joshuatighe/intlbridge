import Link from "next/link";
import { applicationsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-white/80">Your home place to start</p>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Link href={applicationsPath()} className="underline">
          Go to Applications
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
