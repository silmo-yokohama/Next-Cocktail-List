import SubHeaderTitle from "@/components/atoms/typography/SubHeaderTitle";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const SubHeader = ({ children }: Props) => {
  console.log(children);
  return (
    <div
      className="hero mb-10 min-h-32 md:min-h-48"
      style={{
        backgroundImage: "url(/images/photo/header-image.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <SubHeaderTitle>{children}</SubHeaderTitle>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
