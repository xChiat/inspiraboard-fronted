import React from 'react';
import { Link } from 'react-router-dom';
import { MainContainer, Content, Title, ButtonGroup } from './WelcomePage.styles';
import appLogo from '../../../../assets/react.svg'; // Ajusta la ruta

const WelcomePage = () => {
  return (
    <MainContainer>
      <Content>
        <img src={appLogo} alt="App Logo" className="w-32 h-32 mb-8" />
        <Title>Bienvenido a la Aplicación</Title>
        
        <ButtonGroup>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </Link>
          
          <Link
            to="/singup"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Crear Cuenta
          </Link>
        </ButtonGroup>
      </Content>
    </MainContainer>
  );
};

export default WelcomePage;