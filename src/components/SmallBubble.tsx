import clsx from 'clsx';

type SmallBubbleProps = {
  Icon?: React.ComponentType;
  text: string;
  devStatus?: 'done' | 'dev' | 'none';
};

const STATUS_COLORS = {
  done: 'bg-green-400',
  dev: 'bg-orange-400',
  none: 'bg-red-500',
};

export const SmallBubble: React.FC<SmallBubbleProps> = ({
  Icon,
  text,
  devStatus,
}) => {
  return (
    <div className="p-2 text-xs border-[1px] rounded-2xl flex items-center gap-1">
      {Icon && <Icon />}
      <div className="mr-[2px]">{text}</div>
      {devStatus && (
        <div
          className={clsx('w-2 h-2 rounded-full', STATUS_COLORS[devStatus])}
        />
      )}
    </div>
  );
};
