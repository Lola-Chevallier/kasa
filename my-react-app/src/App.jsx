import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './styles/index.scss'
import NotFound from './pages/NotFound';
import LogementsDetails from './pages/LogementsDetails';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<LogementsDetails />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;