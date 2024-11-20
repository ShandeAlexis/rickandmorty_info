import React from "react";
import "../styles/home.css";
import SesionesGrid from "../components/ui/Sesion";
import Title from "../components/ui/Title";
import MainLayout from "../layouts/MainLayout";

export const Home = () => {

  const sesiones = [
    {
      color: "fondo1",
      gridArea: "a",
      title: "Capitulos",
      subtitle: "Explorar los capitulos",
      link: "/capitulos",
    },
    {
      color: "fondo2",
      gridArea: "b",
      title: "Personajes",
      subtitle: "Explorar los personajes",
      link: "/personajes",
    },
    {
      color: "fondo3",
      gridArea: "c",
      title: "Ubicaciones",
      subtitle: "Explorar ubicaciones",
      link: "/ubicaciones",
    },
  ];
  return (

    
    <MainLayout>
       <Title>Rick And Morty</Title>
      <SesionesGrid sesiones={sesiones} />
    
    </MainLayout>
  );
};
