import React from "react";
import { Link } from "react-router-dom";

export const NavbarLinks = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden transition-all duration-300 ease-in-out bg-black dark:bg-gray-800 lg:mt-0 lg:p-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:max-h-full lg:flex lg:items-center lg:justify-between`}
    >
      <div className="flex flex-col text-gray-400 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row items-center">
        {[
          { name: "Inicio", path: "/" },
          { name: "Personajes", path: "/personajes" },
          { name: "Capítulos", path: "/capitulos" },
          { name: "Ubicaciones", path: "/ubicaciones" },
          { name: "Test", path: "/test" },
        ].map((link) => (
          <Link
            to={link.path}
            key={link.name}
            className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white font-mono"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
