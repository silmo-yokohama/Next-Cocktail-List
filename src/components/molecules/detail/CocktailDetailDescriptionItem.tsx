import { Children } from "@/types/CommonTypes";
import React, { ReactNode } from "react";

interface Props extends Children {
  title: string;
  titleIcon?: ReactNode;
}

const CocktailDetailDescriptionItem = ({
  title,
  titleIcon,
  children,
}: Props) => {
  return (
    <div className="flex items-center">
      <h3 className="flex w-2/5 items-center gap-1 px-3 text-xs">
        {titleIcon}
        {title}
      </h3>
      <span className=" flex-grow  px-3 text-xs">{children}</span>
    </div>
  );
};

export default CocktailDetailDescriptionItem;
