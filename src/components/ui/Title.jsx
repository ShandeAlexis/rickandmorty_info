import React from 'react'

export default function Title({children}) {
  return (
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-yellow-300 mb-6 tracking-tight hover:scale-110 hover:drop-shadow-lg transition-all duration-300 ease-out p-2">
            {children}
    </h1>
  )
}
