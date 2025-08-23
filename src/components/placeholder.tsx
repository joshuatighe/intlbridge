import { type LucideProps, LucideTriangleAlert } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactElement<HTMLDivElement>;
};

const Placeholder = ({
  label,
  icon = <LucideTriangleAlert />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-8 h-8",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-9",
      })}
    </div>
  );
};

export { Placeholder };
