import { type LucideProps, LucideTriangleAlert } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactNode;
};

const Placeholder = ({
  label,
  icon = <LucideTriangleAlert />,
  button = null,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-8 h-8",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
};

export { Placeholder };
