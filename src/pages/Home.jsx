import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

const cardsData = [
    {
      id: 1,
      title: "Consulta de Eventos",
      description: "Revisa todos los eventos disponibles y próximos.",
      imgSrc: "https://img.icons8.com/fluency/48/000000/calendar.png",
      link: "/consulta-eventos",
    },
    {
      id: 2,
      title: "Registrar un Tema a Gusto",
      description: "Propón un tema para futuros eventos y charlas.",
      imgSrc: "https://img.icons8.com/fluency/48/000000/edit.png",
      link: "/registrar-tema",
    },
    {
      id: 3,
      title: "Consultar Mis Eventos y Certificados",
      description: "Visualiza los eventos donde participaste y tus certificados.",
      imgSrc: "https://img.icons8.com/fluency/48/000000/certificate.png",
      link: "/mis-eventos",
    },
    {
      id: 4,
      title: "Encuesta Evento",
      obligatorio:"(OBLIGATORIO PARA REGISTRAR NUEVO EVENTO)",
      description: "Encuestar los eventos, talleres y seminarios inscritos.",
      imgSrc: "https://img.icons8.com/fluency/48/000000/checked-checkbox.png",
      link: "/encuesta-evento",
    },
  ];

function Home() {
  return (
    <>
      <Nav nombre="Hola Federico Alvez" />
        <div className="max-w-4xl mx-auto px-4 py-8 grid gap-8 sm:grid-cols-4 md:grid-cols-2">
        {cardsData.map(({ id, title, description,obligatorio, imgSrc, link }) => (
            <div
            key={id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
            <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <h4 className='text-red-800 font-bold text-xs'>{obligatorio}</h4>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
                to={link}
                className="mt-auto inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors duration-300"
            >
                Ir a {title}
            </Link>
            </div>
        ))}
        </div>
    </>
  );
}

export default Home;
