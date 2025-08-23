import { LucideGlobe } from "lucide-react";
import Link from "next/link";
import { applicationsPath, homePath } from "@/paths";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav
      className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          "
    >
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideGlobe />
          <h1 className="text-lg font-semibold">intlbridge</h1>
        </Link>
      </div>
      <div>
        <Link
          href={applicationsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Applications
        </Link>
      </div>
    </nav>
  );
};

export { Header };
