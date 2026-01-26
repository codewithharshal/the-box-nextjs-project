import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Image src="/the-box-logo.svg" alt="The Box Logo" width={30} height={45} />
  );
};
