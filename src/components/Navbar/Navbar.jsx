import React, { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenuToggle } from "./NavbarMenuToggle";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarSocialLinks } from "./NavbarSocialLinks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <NavbarLogo />
            <div className="flex lg:hidden ">
              <NavbarMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </div>
          <NavbarLinks isOpen={isOpen} />
          <NavbarSocialLinks />
        </div>
      </div>
    </nav>
  );
};
