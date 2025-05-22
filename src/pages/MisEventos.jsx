import React from 'react'
import Nav from '../components/Nav'

function MisEventos() {
  return (
    <>
        <Nav nombre="Hola Federico Alvez" />
        <div className="max-w-4xl mx-auto px-6 py-10 grid gap-10 sm:grid-cols-2 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl">
            <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-wide">Certificado: Evento de Inteligencia Artificial</h3>
                <p className="text-gray-600 mb-8 font-medium">Fecha: 27/05/2025 | Modalidad: Virtual</p>

            </div>

            <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-wide">Certificado: Taller de Robótica</h3>
                <p className="text-gray-600 mb-8 font-medium">Fecha: 15/04/2025 | Modalidad: Presencial</p>
            </div>
        </div>
    </>
  )
}

export default MisEventos