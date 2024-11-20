import React from "react";
import { Link } from "react-router-dom";

const Sesion = ({ color, gridArea, title, subtitle, link }) => (
  <Link
    to={link}
    className={`flex flex-col items-center justify-center text-center h-full w-full rounded-md text-white cursor-pointer transition-transform duration-500 ${color}`}
    style={{ gridArea }}
  >
    <p className="text-lg font-bold">{title}</p>
    <p className="text-sm">{subtitle}</p>
  </Link>
);

const SesionesGrid = ({ sesiones }) => {
  return (
    <section className="fondocuadros flex justify-center items-center min-h-screen p-4">
      <div
        className="bg-black hidden lg:grid gap-4 p-4  rounded-lg shadow-md"
        style={{
          gridTemplateColumns: "repeat(2, 400px)",
          gridTemplateRows: "repeat(2, 400px)",
          gridTemplateAreas: `"a b" "c b"`,
        }}
      >
        {sesiones.map((sesion, index) => (
          <Sesion
            key={index}
            color={sesion.color}
            gridArea={sesion.gridArea}
            title={sesion.title}
            subtitle={sesion.subtitle}
            link={sesion.link}
          />
        ))}
      </div>

      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 auto-rows-fr lg:hidden">
        {sesiones.map((sesion, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-48 w-full sm:h-64"
          >
            <Sesion
              color={sesion.color}
              title={sesion.title}
              subtitle={sesion.subtitle}
              link={sesion.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SesionesGrid;
