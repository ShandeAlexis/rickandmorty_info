import React, { useEffect, useState } from "react";
import { Modal } from "../components/ui/Modal";
import { NavbarSearch } from "../components/Navbar/NavbarSearch";
import Footer from "../components/Footer/Footer";
import "../styles/personajes.css";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Subtitle from "../components/ui/SubTitle";
import { personajesRickAndMorty } from "../services/personajes";
import Pagination from "../components/Pagination/Pagination";

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [personajesContado, setPersonajesContada] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await personajesRickAndMorty.getPersonajes(page);
        setPersonajes(data.results);
        setTotalPages(data.info.pages);
        setPersonajesContada(data.info.count);
        console.log(data.info.count);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [page]);

  const openModal = (personaje) => {
    setSelectedPersonaje(personaje);
  };

  const closeModal = () => {
    setSelectedPersonaje(null);
  };

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 1));

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
          <Title children={`Rick and Morty`}></Title>
          <Subtitle children={`${personajesContado} personajes`} />

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
          <Pagination
            page={page}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
          />
        </main>

        {selectedPersonaje && (
          <Modal personaje={selectedPersonaje} onClose={closeModal} />
        )}
      </section>
      <Footer />
    </>
  );
};
