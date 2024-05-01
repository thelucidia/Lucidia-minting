import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Nav = lazy(() => import('./components/Nav'));
const Footer = lazy(() => import('./components/Footer'));


import AppHome from './pages/Apps/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
    </Routes>
  );
};

const App: React.FC = () => {
 
  return (
    <section className="w-full h-full overflow-hidden bg-bg container max-w-[1900px] mx-auto">
      <Nav />
      <AppRoutes />
      <Footer />
    </section>
  );
};

export default App;
