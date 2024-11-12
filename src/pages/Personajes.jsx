import React, { useEffect, useState } from "react";
import { apiService } from "../services/rickandmortyService";
import { Card } from "../components/ui/Card";

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.get("character");
        setPersonajes(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const openModal = (personaje) => {
    setSelectedPersonaje(personaje);
  };

  const closeModal = () => {
    setSelectedPersonaje(null);
  };

  if (error) {
    return <p>Error al cargar los personajes: {error}</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Personajes de Rick and Morty
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {personajes.length > 0 ? (
            personajes.map((personaje) => (
              <div key={personaje.id} className="bg-white p-4 rounded shadow">
                <img
                  onClick={() => openModal(personaje)}
                  src={personaje.image}
                  alt={personaje.name}
                  className="w-full h-40 object-cover rounded mb-4 cursor-pointer"
                />
                <h2 className="text-xl font-semibold">{personaje.name}</h2>
                <p className="text-gray-500">{personaje.species}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron personajes.</p>
          )}
        </div>
      </div>

      {selectedPersonaje && (
        <Card personaje={selectedPersonaje} onClose={closeModal} />
      )}
    </div>
  );
};
