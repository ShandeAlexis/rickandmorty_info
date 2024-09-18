import React from 'react'

export const NavbarLinks = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
    >
      <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
        {['Inicio', 'Personajes', 'Capitulos', 'Contactanos', 'Test'].map((link) => (
          <a
            href="#"
            key={link}
            className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}
