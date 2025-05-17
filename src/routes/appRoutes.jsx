import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../modules/auth/pages/WelcomePage/index.jsx';
import LoginPage from '../modules/auth/pages/Login/index..jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;