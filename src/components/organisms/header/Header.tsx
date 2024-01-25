import React from "react";
import HeaderLogo from "../../atoms/logo/HeaderLogo";
import FavoriteButton from "../../atoms/buttons/FavoriteButton";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-[80px] w-full bg-neutral">
      <div className="m-auto flex max-w-[1980px] items-center justify-between px-1 md:px-4 ">
        <HeaderLogo />

        <div className="flex w-auto">
          <FavoriteButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
