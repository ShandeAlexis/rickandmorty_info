import React from "react";

export default function Pagination({ page, totalPages, onNext, onPrevious }) {
  return (
    <div className="pagination mt-4 flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Anterior
      </button>
      <span className="text-white">
        Página {page} de {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Siguiente
      </button>
    </div>
  );
}
