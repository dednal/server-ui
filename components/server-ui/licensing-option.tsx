import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { act } from "react";

export const LicensingOption = (props: any) => {
  const {
    onClick,
    value,
    mainText,
    subText,
    subTextExtra,
    endText,
    endSubText,
    active,
  } = props;
  console.log("🚀 ~ LicensingOption ~ value:", value);
  console.log("🚀 ~ LicensingOption ~ active:", active);

  return (
    <li
      className={cn(
        "flex grow bg-white text-slate-700 py-5 pr-5 cursor-pointer",
        { "border border-blue-500": active }
      )}
      onClick={() => onClick(value)}
    >
      <div className="flex p-3 items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </div>
      <div className="flex grow justify-between">
        <div>
          <div className="text-base font-bold">{mainText}</div>
          <div className="flex gap-1">
            <div className="text-xs font-bold">{subText}</div>
            <div className="text-xs font-light">{subTextExtra}</div>
          </div>
        </div>
        <div>
          <div className="text-base font-bold">{endText}</div>
          <div className="text-xs font-light ">{endSubText}</div>
        </div>
      </div>
    </li>
  );
};

export default LicensingOption;
