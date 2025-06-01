import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil.jsx';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
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
