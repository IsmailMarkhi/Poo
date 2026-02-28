import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">

      <div className="text-center max-w-2xl w-full">

        {/* Title */}
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl 
          font-extrabold mb-6
          bg-gradient-to-r from-emerald-400 to-green-600
          bg-clip-text text-transparent
        ">
          Cours POO — Conceptuel
        </h1>

        {/* Subtitle */}
        <p className="
          text-zinc-400 mb-10
          text-sm sm:text-base md:text-lg
        ">
          Modélisation objet → Implémentation Python → TP
        </p>

        {/* Button */}
        <Link
          to="/cours"
          className="
            inline-block
            bg-gradient-to-r from-emerald-500 to-green-600
            hover:from-emerald-400 hover:to-green-500
            text-white font-semibold
            px-8 py-3 rounded-xl
            shadow-lg shadow-emerald-900/40
            transition duration-300
            text-sm sm:text-base
          "
        >
          Commencer le cours
        </Link>

      </div>
    </div>
  );
}