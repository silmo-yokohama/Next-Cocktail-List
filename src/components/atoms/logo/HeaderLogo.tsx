import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  const APP_NAME = process.env.APP_NAME!;

  return (
    <Link href="/" className="">
      <h1 className="sr-only">{APP_NAME}</h1>
      <img
        src="/images/logo/light-small-logo.png"
        alt={APP_NAME}
        className="w-52 md:w-80 "
      />
    </Link>
  );
};

export default HeaderLogo;
