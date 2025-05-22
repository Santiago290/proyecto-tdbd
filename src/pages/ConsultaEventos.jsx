import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

function ConsultaEventos() {
  return (
    <>
    <Nav nombre="Hola Federico Alvez" />
    <div className='grid grid-cols-2 max-w-4xl gap-8 mx-auto mt-10'>
        <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Consulta de Eventos</h2>
            <p className="mb-1"><span className="font-semibold">🎓 Tema:</span> Inteligencia Artificial en la Educación</p>
            <p className="mb-1"><span className="font-semibold">👩‍🏫 Expositor:</span> Dra. Carmen Velarde</p>
            <p className="mb-1"><span className="font-semibold">📅 Fecha:</span> 27/05/2025</p>
            <p className="mb-1"><span className="font-semibold">💻 Modalidad:</span> Virtual</p>
            <p className="mt-2 text-gray-600"><span className="font-semibold">📝 Descripción:</span> Aplicación de la IA en entornos educativos modernos.</p>
            <div className="mt-6 text-center">
            <Link to="/inscripcion" className="inline-block bg-[rgb(189,23,20)] hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-xl shadow transition duration-300">
                Inscribirse
            </Link>
            </div>
        </div>
        <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Consulta de Eventos</h2>
            <p className="mb-1"><span className="font-semibold">🎓 Tema:</span> Inteligencia Artificial en la Educación</p>
            <p className="mb-1"><span className="font-semibold">👩‍🏫 Expositor:</span> Dra. Carmen Velarde</p>
            <p className="mb-1"><span className="font-semibold">📅 Fecha:</span> 27/05/2025</p>
            <p className="mb-1"><span className="font-semibold">💻 Modalidad:</span> Virtual</p>
            <p className="mt-2 text-gray-600"><span className="font-semibold">📝 Descripción:</span> Aplicación de la IA en entornos educativos modernos.</p>
            <div className="mt-6 text-center">
                <Link to="/inscripcion" className="inline-block bg-[rgb(189,23,20)] hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-xl shadow transition duration-300">
                    Inscribirse
                </Link>
            </div>
        </div>
        <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Consulta de Eventos</h2>
            <p className="mb-1"><span className="font-semibold">🎓 Tema:</span> Inteligencia Artificial en la Educación</p>
            <p className="mb-1"><span className="font-semibold">👩‍🏫 Expositor:</span> Dra. Carmen Velarde</p>
            <p className="mb-1"><span className="font-semibold">📅 Fecha:</span> 27/05/2025</p>
            <p className="mb-1"><span className="font-semibold">💻 Modalidad:</span> Virtual</p>
            <p className="mt-2 text-gray-600"><span className="font-semibold">📝 Descripción:</span> Aplicación de la IA en entornos educativos modernos.</p>
            <div className="mt-6 text-center">
                <Link to="/inscripcion" className="inline-block bg-[rgb(189,23,20)] hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-xl shadow transition duration-300">
                    Inscribirse
                </Link>
            </div>
        </div>
    </div>
</>
  )
}

export default ConsultaEventos