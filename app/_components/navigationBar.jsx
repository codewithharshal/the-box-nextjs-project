import React from "react";
import { Logo } from "./logo";
import { TextLogo } from "./textLogo";
import { NavLink } from "./navLink";
import { Menu } from "./menu";

export const NavigationBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3 md:px-8 lg:px-16 shadow-sm">
      <div className="flex items-center gap-2">
        <Logo />
        <TextLogo />
      </div>
      <div className="hidden md:block">
        <NavLink />
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};
