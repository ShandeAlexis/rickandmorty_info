import React from "react";
import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  const url_logo = "/logo_rickandmorty.webp";

  return (
    <Link to="/">
      <img className="w-auto h-10 sm:h-11" src={url_logo} alt="Logo"  />
    </Link>
  );
};
