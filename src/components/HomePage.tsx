import React, { useState } from "react";
import HamburgerMenu from "./Hamburger";
import { Links } from "./Hamburger";

export const HomePage = () => {
  return (
    <div className="flex h-12 w-full items-center justify-start rounded-md bg-black text-white">
      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
      <div className="hidden items-center justify-center md:flex">
        <Links />
      </div>
    </div>
  );
};
