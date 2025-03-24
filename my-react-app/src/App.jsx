import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './styles/index.scss'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/about">À propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;