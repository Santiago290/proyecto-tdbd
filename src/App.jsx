import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ConsultaEventos from './pages/ConsultaEventos';
import RegistrarTema from './pages/RegistrarTema';
import MisEventos from './pages/MisEventos';
import EncuestaEvento from './pages/EncuestaEvento';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="********"
              />
            </div>

            <div className="mb-6 text-right">
              <a href="#" className="text-sm font-medium" style={{ color: "rgb(189, 23, 20)" }}>
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Link que luce como botón */}
            <Link
              to="/Home"
              className="block w-full text-center py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200"
            >
              Iniciar sesión
            </Link>
          </div>
        } />
        
        <Route path="/Home" element={<Home />} />
        <Route path="/consulta-eventos" element={<ConsultaEventos />} />
        <Route path="/registrar-tema" element={<RegistrarTema />} />
        <Route path="/mis-eventos" element={<MisEventos />} />
        <Route path="/encuesta-evento" element={<EncuestaEvento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
