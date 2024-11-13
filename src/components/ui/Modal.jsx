import React from "react";

export const Modal = ({ personaje, onClose }) => {
  const fechaCreacion = new Date(personaje.created).toLocaleDateString(
    "es-ES",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex justify-center items-end text-center sm:block">
        <div className="bg-gray-500 transition-opacity bg-opacity-75"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          ​
        </span>
        <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div className="items-center w-full mx-auto relative max-w-7xl md:px-12 lg:px-24">
            <div className="grid grid-cols-1">
              <div className="mt-4 mx-auto bg-gray-900 max-w-lg">
                <div className="flex flex-col items-center p-6">
                  <img
                    src={personaje.image}
                    className="flex-shrink-0 object-cover object-center w-16 h-16 -mb-8 mx-auto rounded-full shadow-xl"
                    alt={personaje.name}
                  />
                  <p className="mt-11 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                    {personaje.name}
                  </p>
                  <div className="mt-3 text-base leading-relaxed text-center text-gray-200">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-semibold">Origen:</span>{" "}
                        {personaje.origin.name}
                      </li>
                      <li>
                        <span className="font-semibold">Estado:</span>{" "}
                        {personaje.status}
                      </li>
                      <li>
                        <span className="font-semibold">
                          Cantidad de episodios:
                        </span>{" "}
                        {personaje.episode.length}
                      </li>
                      <li>
                        <span className="font-semibold">Ubicación:</span>{" "}
                        {personaje.location.name || "Desconocido"}
                      </li>
                      <li>
                        <span className="font-semibold">Creado:</span>{" "}
                        {fechaCreacion}
                      </li>
                    </ul>
                  </div>
                  <div className="w-full mt-6">
                    <button
                      onClick={onClose}
                      className="flex items-center justify-center w-full py-4 text-base font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
