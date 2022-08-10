import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import Navbar from "../components/Navbar";
import PacientesPage from "../pages/PacientesPage";
import PacientePage from "../pages/PacientePage";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/paciente/:id" element={<PacientePage />} />
          <Route path="/notfound" element={<NotFoundPage />} />

          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
