import React from 'react'
import Nav from '../components/Nav'

function RegistrarTema() {
  return (
    <>
        <Nav nombre="Hola Federico Alvez" />
        <div className="max-w-md mt-20 mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Registrar un Tema a Gusto</h2>
            <p className="mb-6 text-gray-700">Propón un tema para futuros eventos y charlas.</p>
            
            <form className="mb-6 space-y-4">
                <input type="text" placeholder="Tema escogido" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
                <textarea placeholder="Breve descripción" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-600" />
                <button type="submit" className="w-full bg-[rgb(189,23,20)] hover:bg-red-800 text-white font-semibold py-2 rounded-xl transition duration-300" >Enviar Tema</button>
            </form>
        </div>
    </>
  )
}

export default RegistrarTema