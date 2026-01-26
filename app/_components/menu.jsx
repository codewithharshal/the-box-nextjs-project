"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink } from "./navLink";
export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="">
      {openMenu ?
        <MdClose size={42} onClick={() => setOpenMenu(false)} />
      : <MdMenu
          size={42}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      }
      {openMenu && (
        <div className="absolute z-10 bg-white top-16 right-0 w-full text-center">
          <NavLink />
        </div>
      )}
    </div>
  );
};
