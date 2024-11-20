import React from "react";

export const ModalSinImagen = ({ objeto, onClose }) => {
  if (!objeto) {
    console.error("El objeto no es válido.");
    return null;
  }

  const fechaCreacion = new Date(objeto.created).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{objeto.name}</h2>
          <ul className="mt-4 text-gray-300 space-y-2">
            <li>
              <span className="font-semibold">Nombre:</span> {objeto.name || "Desconocido"}
            </li>
            <li>
              <span className="font-semibold">Date:</span> {objeto.air_date || "Desconocido"}
            </li>
            <li>
              <span className="font-semibold">Temporada y episodio:</span> {objeto.episode || "Desconocido"}
            </li>
            <li>
              <span className="font-semibold">Aparecen :</span> {objeto.characters.length || "Desconocido"} Personajes
            </li>
            <li>
              <span className="font-semibold">Creado:</span> {fechaCreacion}
            </li>
          </ul>
          <button
            onClick={onClose}
            className="mt-6 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
