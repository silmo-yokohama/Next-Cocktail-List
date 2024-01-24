import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const TopHero = ({ children }: Props) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/images/photo/firstview.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      {children}
    </div>
  );
};

export default TopHero;
