import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../modules/auth/pages/WelcomePage/index.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* Ruta para 404 - Opcional */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;