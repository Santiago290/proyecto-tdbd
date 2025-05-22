import React from 'react'
import Nav from '../components/Nav'

function EncuestaEvento() {
  return (
    <>
        <Nav nombre="Hola Federico Alvez" />
        <div className="max-w-3xl mt-20 mx-auto p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Encuesta Evento</h2>
          <p className="mb-6 text-center text-gray-600">Encuestar los eventos, talleres y seminarios inscritos.</p>
          <form className="space-y-6">
            <div>
              <label htmlFor="ponente" className="block text-gray-700 font-semibold mb-2">Puntaje al Ponente</label>
              <select id="ponente" name="ponente" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(189,23,20)] focus:border-[rgb(189,23,20)]" defaultValue="">
                <option value="" disabled>Seleccione un puntaje</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="tema" className="block text-gray-700 font-semibold mb-2">Puntaje al Tema Elegido</label>
              <select id="tema" name="tema" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(189,23,20)] focus:border-[rgb(189,23,20)]" defaultValue="" >
                <option value="" disabled>Seleccione un puntaje</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="organizacion" className="block text-gray-700 font-semibold mb-2">Puntaje a la Organización</label>
              <select id="organizacion" name="organizacion" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(189,23,20)] focus:border-[rgb(189,23,20)]" defaultValue="">
                <option value="" disabled>
                  Seleccione un puntaje
                </option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <textarea placeholder="Comentario del evento" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 placeholder:text-black" />
            <button type="submit" className="w-full bg-[rgb(189,23,20)] text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition-colors duration-300" >Enviar Encuesta</button>
          </form>
        </div>
    </>
)
}

export default EncuestaEvento