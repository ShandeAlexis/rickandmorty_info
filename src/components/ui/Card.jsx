import React from "react";

export default function Card({ personaje, onClick }) {
  return (
    <div className="bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        onClick={() => onClick(personaje)}
        src={personaje.image}
        alt={personaje.name}
        className="rounded-lg w-full h-56 object-cover rounded-t-lg cursor-pointer transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{personaje.name}</h2>
        <p className="text-gray-600 text-lg">{personaje.species}</p>
      </div>
    </div>
  );
}
