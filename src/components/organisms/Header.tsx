import React from "react";
import HeaderLogo from "../atoms/logo/HeaderLogo";
import FavoriteButton from "../atoms/buttons/FavoriteButton";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full bg-neutral">
      <div className="m-auto flex w-full items-center justify-between md:max-w-5xl">
        <HeaderLogo />

        <div className="flex w-auto">
          <FavoriteButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
