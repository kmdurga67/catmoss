import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import GroupMembers from "./pages/GroupMembers";
import ResearchTopics from "./pages/ResearchTopics";
import Facilities from "./pages/Facilities";
import Publications from "./pages/Publications";
import Patents from "./pages/Patents";
import Accolades from "./pages/Accolades";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import CatalysisPage from "./pages/CatalysisPage";
import NanomaterialsPage from "./pages/NanomaterialPage";
import SurfaceSciencePage from "./pages/SurfaceScience";
import ReactGA from "react-ga4";

function App() {
  const { pathname } = useLocation();
  const GA4_MEASUREMENT_ID = "G-4G17HQHDZD";

  useEffect(() => {
    ReactGA.initialize(GA4_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalysis" element={<CatalysisPage />} />
          <Route path="/nanomaterials" element={<NanomaterialsPage />} />
          <Route path="/surface-science" element={<SurfaceSciencePage />} />
          <Route path="/group-members" element={<GroupMembers />} />
          <Route path="/research-topics" element={<ResearchTopics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;