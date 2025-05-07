import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transforma tus ideas en realidad
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            La plataforma colaborativa para gestionar proyectos creativos
          </p>
          
          <div className="mt-10">
            <Link
              to="/singup"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Comenzar Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;