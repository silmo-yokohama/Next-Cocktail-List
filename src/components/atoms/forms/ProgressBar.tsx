import React from "react";

interface Props {
  max?: number;
  value: number;
  colorClass?: string;
}
const ProgressBar = ({ max, value, colorClass }: Props) => {
  max = max ? max : 100;
  const width = (value / max) * 100;

  return (
    <div
      className={`rounded-full  p-0.5 text-center text-xs font-medium leading-none text-blue-100 ${colorClass}`}
      style={{ width: `${width}%` }}
    >
      {value}%
    </div>
  );
};

export default ProgressBar;
