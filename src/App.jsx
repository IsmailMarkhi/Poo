import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Cours from "./pages/Cours";
import Lecon from "./pages/Lecon";
import TP from "./pages/TP";
import EFM from "./pages/EFM";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">

        {/* <Navbar /> */}

        {/* MAIN CONTENT */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/lecon/:id" element={<Lecon />} />
            <Route path="/tp/:id" element={<TP />} />
            <Route path="/efm" element={<EFM />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}