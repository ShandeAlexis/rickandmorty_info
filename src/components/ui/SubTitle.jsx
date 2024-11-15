import React from 'react';

export default function Subtitle({ children }) {
  return (
    <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-yellow-300 mb-3 tracking-tight pb-1 font-extralight">
    {children}
</h2>
  );
}
