type SmallBubbleProps = {
  Icon?: React.ComponentType;
  text: string;
};

export const SmallBubble: React.FC<SmallBubbleProps> = ({ Icon, text }) => {
  return (
    <div className="p-2 text-xs border-[1px] rounded-2xl flex items-center gap-1">
      {Icon && <Icon />}
      {text}
    </div>
  );
};
