import React from "react";
import Footer from "../components/Footer/Footer";

export default function PersonajesLayout({ children }) {
  return (
    <div>
      <section className="personajes flex items-center justify-center min-h-screen p-4">
        <main className="container text-center p-6 bg-black rounded-lg shadow-lg">
          {children}
        </main>
      </section>
      <Footer />
    </div>
  );
}
