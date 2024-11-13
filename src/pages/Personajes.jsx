import React, { useEffect, useState } from "react";
import { apiService } from "../services/rickandmortyService";
import { Modal } from "../components/ui/Modal";
import { NavbarSearch } from "../components/Navbar/NavbarSearch";
import Footer from "../components/Footer/Footer";
import '../styles/personajes.css';

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredPersonajes = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <p>Error al cargar los personajes: {error}</p>;
  }

  return (
    <>
      <section className="personajes flex items-center justify-center min-h-screen  p-4">
        <div className="container text-center p-6 bg-black rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-yellow-300 mb-6 tracking-tight hover:scale-110 hover:drop-shadow-lg transition-all duration-300 ease-out">
            Personajes de Rick and Morty
          </h1>

          <NavbarSearch onSearchChange={(value) => setSearchTerm(value)} />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredPersonajes.length > 0 ? (
              filteredPersonajes.map((personaje) => (
                <div key={personaje.id} className="bg-white p-4 rounded shadow">
                  <img
                    onClick={() => openModal(personaje)}
                    src={personaje.image}
                    alt={personaje.name}
                    className="w-full h-50 object-cover rounded mb-4 cursor-pointer"
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
          <Modal personaje={selectedPersonaje} onClose={closeModal} />
        )}
      </section>
      <Footer />
    </>
  );
};
