import React, { useEffect, useState } from 'react'
import CapitulosLayout from '../layouts/CapitulosLayout'
import Title from '../components/ui/Title'
import { capitulosRickAndMorty } from '../services/capitulos';
import Subtitle from '../components/ui/SubTitle';
import CardSinImagen from '../components/ui/CardSinImagen';
import Pagination from '../components/Pagination/Pagination';
import { Modal } from '../components/ui/Modal';
import { ModalSinImagen } from '../components/ui/ModalSinImagen';

export default function Capitulos() {

  const [capitulos, setCapitulos] = useState([]);
  const [capitulosContando, setCapitulosContando] = useState(1);
  const [selectedCapitulo, setSelectedCapitulo] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error , setError] = useState(null);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const data = await capitulosRickAndMorty.getCapitulos(page);

        setCapitulos(data.results);
        setCapitulosContando(data.info.count);
        setTotalPages(data.info.pages)
        
      } catch (error) {
        setError(error.message);
      }

    }

    fetchData();
  },[page]);

 const openModal = (capitulo) =>{
    setSelectedCapitulo(capitulo);
 }

 const closeModal = () => {
  setSelectedCapitulo(null); 
}

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 1));


  if (error) {
    return <p>Error al cargar los capitulos: {error}</p>;
  }


  return (
    <CapitulosLayout>
      <Title children={"Rick and Morty"}></Title>
      <Subtitle children={`${capitulosContando} capitulos`}/>


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {capitulos.map((capitulo)=>(
          <CardSinImagen 
           key={capitulo.id}
           objeto={capitulo}
           onClick={openModal}
          />
        ))}
      </div>

      <Pagination
            page={page}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
      />

        {selectedCapitulo && (
          <ModalSinImagen objeto={selectedCapitulo} onClose={closeModal} />
        )}
    </CapitulosLayout>
  )
}
