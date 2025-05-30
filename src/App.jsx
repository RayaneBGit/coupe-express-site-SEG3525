import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <nav style={{ background: '#eee', padding: '10px' }}>
        <Link to="/" style={{ margin: '0 30px' }}>Accueil</Link>
        <Link to="/services" style={{ margin: '0 30px' }}>Services</Link>
        <Link to="/apropos" style={{ margin: '0 30px' }}>À propos</Link>
        <Link to="/contact" style={{ margin: '0 30px' }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
