import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ nombre }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-midnight">
        EDUCAFIA
      </div>

      <div className="space-x-6 flex items-center">
        <span className="text-gray-800 font-medium">{nombre}</span>
        <Link to="/" className="text-blue-600 hover:underline">Inicio</Link>
        <Link to="/Home" className="text-blue-600 hover:underline">Menu</Link>
        <Link to="/cuenta" className="text-blue-600 hover:underline">Cuenta</Link>
      </div>
    </nav>
  );
}

export default Nav;
