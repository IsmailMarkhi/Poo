import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Cours() {

  const partieConceptuelle = [
    { id: 1, titre: "Concepts POO sans langage" },
    { id: 2, titre: "Objet et Classe (conceptuel)" },
    { id: 3, titre: "Encapsulation conceptuelle" },
    { id: 4, titre: "Héritage conceptuel" },
    { id: 5, titre: "Polymorphisme conceptuel" },
    { id: 6, titre: "Abstraction conceptuelle" }
  ];

  const partiePython = [
    { id: 7, titre: "Classes en Python" },
    { id: 8, titre: "Attributs et méthodes" },
    { id: 9, titre: "Encapsulation en Python" },
    { id: 10, titre: "Héritage en Python" },
    { id: 11, titre: "Polymorphisme en Python" },
    { id: 12, titre: "Abstraction en Python" }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <BackButton />

      <h1 className="text-3xl font-bold mb-8">
        Chapitres du cours POO
      </h1>

      {/* ===== PARTIE 1 ===== */}
      <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
        Partie 1 : POO conceptuelle (sans langage)
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10">

        {partieConceptuelle.map(l => (
          <Link
            key={l.id}
            to={`/lecon/${l.id}`}
            className="bg-zinc-800 p-5 rounded-lg hover:bg-zinc-700 transition"
          >
            {l.id}. {l.titre}
          </Link>
        ))}

      </div>

      {/* ===== PARTIE 2 ===== */}
      <h2 className="text-2xl font-semibold mb-4 text-sky-400">
        Partie 2 : POO avec Python
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {partiePython.map(l => (
          <Link
            key={l.id}
            to={`/lecon/${l.id}`}
            className="bg-zinc-800 p-5 rounded-lg hover:bg-zinc-700 transition"
          >
            {l.id}. {l.titre}
          </Link>
        ))}

      </div>

    </div>
  );
}