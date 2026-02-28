import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">

      <h1 className="text-5xl font-bold mb-6">
        Cours POO — Conceptuel + Python
      </h1>

      <p className="text-zinc-400 mb-8">
        Modélisation objet → Implémentation Python → TP → QCM
      </p>

      <Link
        to="/cours"
        className="bg-emerald-600 px-8 py-3 rounded hover:bg-emerald-700"
      >
        Commencer le cours
      </Link>

    </div>
  );
}