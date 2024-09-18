import React, { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenuToggle } from "./NavbarMenuToggle";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarSocialLinks } from "./NavbarSocialLinks";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <NavbarLogo />
            <div className="flex lg:hidden">
              <NavbarMenuToggle isOpen={isOpen} toggleMenu={toggleMenu}/>
            </div>
          </div>

          <NavbarLinks isOpen={isOpen} />
          <NavbarSearch/>
          <NavbarSocialLinks/>
        </div>
      </div>
    </nav>
  );
};
