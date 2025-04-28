import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/Router'; // importation du routeur
import './assets/styles/index.scss';

function App() {
  return (
    <div>
      <Header />
      <AppRouter /> {/* c’est ici que toutes les routes sont appelées */}
      <Footer />
    </div>
  );
}

export default App;
