import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import Accueil from './pages/Accueil/Accueil.jsx';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = "Salon Boréal";
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/png";
    link.rel = "icon";
    link.href = "/img/logopn.png";
    document.head.appendChild(link);
  }, []);
  return (
    <Router>
      <Menu />

      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
