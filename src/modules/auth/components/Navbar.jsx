import { Link } from 'react-router-dom';
import logo from '../../../assets/react.svg'; // Ajusta la ruta

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Inspiraboard Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-gray-900">Inspiraboard</span>
      </Link>

      <div className="flex items-center">
        <Link
          to="/login"
          className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/singup"
          className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Crear Cuenta
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;