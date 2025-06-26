import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Product Pages
import ProductsOverviewPage from './pages/ProductsOverviewPage';
import SteamBoilersPage from './pages/products/SteamBoilersPage';
import HotAirGeneratorsPage from './pages/products/HotAirGeneratorsPage';
import ElectricHotWaterPage from './pages/products/ElectricHotWaterPage';
import SteamGeneratorsPage from './pages/products/SteamGeneratorsPage';
import ThermicFluidPage from './pages/products/ThermicFluidPage';
import HotWaterGeneratorsPage from './pages/products/HotWaterGeneratorsPage';

// Fuel Pages
import FuelsOverviewPage from './pages/FuelsOverviewPage';
import BriquettesPage from './pages/fuels/BriquettesPage';
import PelletsPage from './pages/fuels/PelletsPage';
import WoodChipsPage from './pages/fuels/WoodChipsPage';
import CNSPage from './pages/fuels/CNSPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Products Routes */}
            <Route path="/products" element={<ProductsOverviewPage />} />
            <Route path="/products/steam-boilers" element={<SteamBoilersPage />} />
            <Route path="/products/hot-air-generators" element={<HotAirGeneratorsPage />} />
            <Route path="/products/electric-hot-water" element={<ElectricHotWaterPage />} />
            <Route path="/products/steam-generators" element={<SteamGeneratorsPage />} />
            <Route path="/products/thermic-fluid" element={<ThermicFluidPage />} />
            <Route path="/products/hot-water-generators" element={<HotWaterGeneratorsPage />} />

            {/* Fuel Routes */}
            <Route path="/fuels" element={<FuelsOverviewPage />} />
            <Route path="/fuels/briquettes" element={<BriquettesPage />} />
            <Route path="/fuels/pellets" element={<PelletsPage />} />
            <Route path="/fuels/wood-chips" element={<WoodChipsPage />} />
            <Route path="/fuels/cashew-nut-shell" element={<CNSPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;