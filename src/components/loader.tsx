import { Spinner } from "./spinner";

type LoaderProps = {
  label: string;
};

const Loader = ({ label }: LoaderProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 items-center justify-center self-center">
      <div className="text-sm">{label}</div>
      <Spinner />
    </div>
  );
};

export { Loader };
