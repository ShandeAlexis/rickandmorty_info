import React, { useEffect, useState } from "react";
import { apiService } from "../services/rickandmortyService";
import { Modal } from "../components/ui/Modal";
import { NavbarSearch } from "../components/Navbar/NavbarSearch";
import Footer from "../components/Footer/Footer";
import "../styles/personajes.css";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

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
        <main className="container text-center p-6 bg-black rounded-lg shadow-lg">
          <Title children={"Personajes de rick and morty"}></Title>

          <NavbarSearch onSearchChange={(value) => setSearchTerm(value)} />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredPersonajes.length > 0 ? (
              filteredPersonajes.map((personaje) => (
                <Card
                  key={personaje.id}
                  personaje={personaje}
                  onClick={openModal}
                />
              ))
            ) : (
              <p className="text-white">No se encontraron personajes.</p>
            )}
          </div>
        </main>

        {selectedPersonaje && (
          <Modal personaje={selectedPersonaje} onClose={closeModal} />
        )}
      </section>
      <Footer />
    </>
  );
};
