import React from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <h1 className="text-4xl text-center bg-sky-300 font-mono ">Rick y Morty</h1>
       <p>Creado por: </p> <span>Alexis <br />Diaz</span>
      <section className="flex w-1/2 p-2 space-x-3">
        <Button children={"Click"} name={"negro"} />
        <Button children={"Prueba"} name={"blanco"} />
      </section>
      <div className="w-6/12">
        <Card />
      </div>
    </>
  );
};
