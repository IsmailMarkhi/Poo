import { useState, useMemo } from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

export default function EFM() {

  // ===== BANQUE DE QUESTIONS =====
  const banque = [

    // Conceptuel
    { q:"Un objet possède :", o:["Identité, état, comportement","Seulement des données","Seulement des fonctions"], c:0 },
    { q:"Encapsulation signifie :", o:["Protéger les données","Supprimer classe","Compiler"], c:0 },
    { q:"Héritage permet :", o:["Réutilisation du modèle","Suppression","Boucle"], c:0 },
    { q:"Polymorphisme signifie :", o:["Plusieurs formes","Une seule forme","Aucune"], c:0 },

    // Python
    { q:"Mot-clé pour définir une classe en Python :", o:["class","def","struct"], c:0 },
    { q:"Méthode constructeur Python :", o:["__init__","main()","start()"], c:0 },
    { q:"self représente :", o:["L’objet courant","Une variable globale","Une fonction"], c:0 },
    { q:"__nom indique :", o:["Attribut privé","Public","Protégé"], c:0 },

    // Mix
    { q:"Une méthode représente :", o:["Une action","Une donnée","Un type"], c:0 },
    { q:"Une classe est :", o:["Un modèle","Un objet","Une variable"], c:0 }

  ];

  // ===== 8 questions aléatoires =====
  const questions = useMemo(() => {
    return [...banque]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }, []);

  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);

  const repondre = (rep) => {
    if (rep === questions[i].c) setScore(score + 1);
    setI(i + 1);
  };

  // ===== RESULTAT FINAL =====
  if (i >= questions.length) {

    const percent = Math.round((score / questions.length) * 100);
    const success = percent >= 60;

    return (
      <div className="min-h-screen flex items-center justify-center px-4">

        <div className="bg-zinc-800 p-8 rounded-2xl text-center max-w-md w-full">

          <BackButton />

          <h1 className="text-3xl font-bold mb-4">
            Résultat EFM
          </h1>

          <div className={`text-5xl font-bold mb-2 ${
            success ? "text-emerald-500" : "text-red-500"
          }`}>
            {score} / {questions.length}
          </div>

          <p className="mb-6">{percent}%</p>

          <p className="mb-8 text-lg">
            {success
              ? "🎉 Module validé !"
              : "❌ Module non validé — Révisez le cours"}
          </p>

          <div className="flex flex-col gap-3">

            <button
              onClick={() => window.location.reload()}
              className="bg-emerald-600 py-2 rounded"
            >
              Repasser l’examen
            </button>

            <Link
              to="/cours"
              className="bg-blue-600 py-2 rounded"
            >
              Retour au cours
            </Link>

          </div>

        </div>

      </div>
    );
  }

  const q = questions[i];

  return (
    <div className="max-w-xl mx-auto p-8">

      <BackButton />

      <h1 className="text-2xl font-bold mb-6">
        EFM — Examen final POO
      </h1>

      <p className="mb-6">
        Question {i + 1} / {questions.length}
      </p>

      <h2 className="text-lg mb-6">{q.q}</h2>

      {q.o.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => repondre(idx)}
          className="block w-full bg-zinc-800 p-3 mb-3 rounded hover:bg-emerald-600 transition"
        >
          {opt}
        </button>
      ))}

    </div>
  );
}