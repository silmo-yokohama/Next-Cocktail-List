import React from "react";

interface Props {
  errorCode: string;
}

const Error = ({ errorCode }: Props) => {
  const errorTitle =
    {
      E404: "このページは見つかりません。",
      E000: "検索結果は見つかりませんでした",
      E999: "APIエラー",
    }[errorCode] || "Error";

  return (
    <div className="min-h-[500px] w-full">
      <div className="mx-auto mt-80 h-4/5 w-11/12 max-w-[1980px] items-center justify-center bg-base-200">
        <h2>{errorTitle}</h2>
      </div>
    </div>
  );
};

export default Error;
