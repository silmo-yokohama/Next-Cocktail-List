import ProgressBar from "@/components/atoms/forms/ProgressBar";
import React from "react";
interface Props {
  alcohol: number;
  max?: number;
}
const AlcoholParamater = ({ max, alcohol }: Props) => {
  max = max ? max : 50;
  let progressColor;
  if (alcohol < 15) {
    progressColor = "bg-indigo-700";
  } else if (alcohol < 35) {
    progressColor = "bg-warning";
  } else if (alcohol >= 35) {
    progressColor = "bg-error";
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-info">弱</span>
      <div className="w-full rounded-full bg-gray-700">
        <ProgressBar max={max} value={alcohol} colorClass={progressColor} />
      </div>
      <span className="text-error">強</span>
    </div>
  );
};

export default AlcoholParamater;
