import React from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar/>
      <h1 className="text-4xl text-center bg-sky-300 font-mono ">Hola mundo</h1>
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
