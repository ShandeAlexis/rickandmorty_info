import React from 'react';

export const Card = ({ personaje, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
        >
          &times;
        </button>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={personaje.image}
            alt={personaje.name}
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “{personaje.name} es un personaje de Rick y Morty. Su especie es: {personaje.species}.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {personaje.name}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {personaje.species} - {personaje.gender}
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};
