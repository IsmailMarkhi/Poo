import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const tps = {

  // ================= CONCEPTUEL =================

  1: {
    titre: "Identifier objets et classes",
    enonce:
      "Dans un système de gestion d’école, identifier les classes possibles et donner des exemples d’objets.",

    solution: (
      <>
        <p className="font-semibold mb-2">Classes :</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Étudiant</li>
          <li>Professeur</li>
          <li>Cours</li>
          <li>Salle</li>
        </ul>

        <p className="font-semibold mb-2">Exemples d’objets :</p>
        <ul className="list-disc ml-6">
          <li>Ahmed → Étudiant</li>
          <li>Salle B12 → Salle</li>
          <li>Mathématiques → Cours</li>
        </ul>
      </>
    ),

    eclairage:
      "Une classe est une catégorie d’objets similaires. Un objet est une instance concrète de cette classe."
  },

  2: {
    titre: "Modélisation : Classe Voiture",
    enonce: "Proposer la modélisation conceptuelle d’une classe Voiture.",

    solution: (
      <table className="w-full border border-zinc-700 text-left">
        <thead className="bg-zinc-800">
          <tr>
            <th colSpan="2" className="p-3 text-center">
              Classe : Voiture
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-zinc-700">
            <td colSpan="2" className="p-3 font-semibold">Attributs</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td className="p-3">+ marque</td>
            <td className="p-3">Nom du constructeur</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td className="p-3">+ couleur</td>
            <td className="p-3">Couleur</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td className="p-3">- vitesse</td>
            <td className="p-3">Vitesse actuelle</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td colSpan="2" className="p-3 font-semibold">Méthodes</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td className="p-3">+ accelerer()</td>
            <td className="p-3">Augmente vitesse</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td className="p-3">+ freiner()</td>
            <td className="p-3">Réduit vitesse</td>
          </tr>
        </tbody>
      </table>
    ),

    eclairage:
      "Les attributs décrivent l’état d’un objet. Les méthodes décrivent ses actions."
  },

  3: {
    titre: "Encapsulation — Compte Bancaire",
    enonce:
      "Modéliser une classe CompteBancaire dont le solde est privé.",

    solution: (
      <>
        <p className="font-semibold">Classe : CompteBancaire</p>

        <p className="mt-2 font-semibold">Attribut :</p>
        <ul className="list-disc ml-6 mb-3">
          <li>- solde</li>
        </ul>

        <p className="font-semibold">Méthodes :</p>
        <ul className="list-disc ml-6">
          <li>+ deposer()</li>
          <li>+ retirer()</li>
          <li>+ consulterSolde()</li>
        </ul>
      </>
    ),

    eclairage:
      "L’encapsulation protège les données contre un accès direct."
  },

  4: {
    titre: "Héritage — Animal",
    enonce:
      "Modéliser une hiérarchie Animal → Chien.",

    solution: (
      <table className="w-full border border-zinc-700 text-left">
        <thead className="bg-zinc-800">
          <tr>
            <th colSpan="2" className="p-3 text-center">
              Classe mère : Animal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-zinc-700">
            <td className="p-3">+ nom</td>
            <td className="p-3">Nom de l’animal</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td className="p-3">+ seDeplacer()</td>
            <td className="p-3">Action générale</td>
          </tr>

          <tr className="border-t border-zinc-700 bg-zinc-800">
            <td colSpan="2" className="p-3 text-center">
              Classe fille : Chien
            </td>
          </tr>

          <tr className="border-t border-zinc-700">
            <td className="p-3">+ aboyer()</td>
            <td className="p-3">Action spécifique</td>
          </tr>
        </tbody>
      </table>
    ),

    eclairage:
      "La classe enfant hérite des caractéristiques de la classe parent."
  },

  5: {
    titre: "Polymorphisme",
    enonce:
      "Une méthode seDeplacer() est commune à plusieurs véhicules.",

    solution: (
      <table className="w-full border border-zinc-700 text-left">
        <thead className="bg-zinc-800">
          <tr>
            <th colSpan="2" className="p-3 text-center">
              Classe : Vehicule — Méthode seDeplacer()
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-zinc-700">
            <td>Voiture</td>
            <td>Roule</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td>Avion</td>
            <td>Vole</td>
          </tr>
          <tr className="border-t border-zinc-700">
            <td>Bateau</td>
            <td>Navigue</td>
          </tr>
        </tbody>
      </table>
    ),

    eclairage:
      "Le polymorphisme permet d’utiliser une même méthode avec des comportements différents."
  },

  6: {
    titre: "Abstraction — Forme",
    enonce:
      "Modéliser une classe abstraite Forme avec surface().",

    solution: (
      <table className="w-full border border-zinc-700 text-left">
        <thead className="bg-zinc-800">
          <tr>
            <th colSpan="2" className="p-3 text-center">
              Classe abstraite : Forme
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-zinc-700">
            <td>+ surface()</td>
            <td>Méthode abstraite</td>
          </tr>
          <tr className="border-t border-zinc-700 bg-zinc-800">
            <td colSpan="2" className="p-3 text-center">
              Exemples : Rectangle, Cercle
            </td>
          </tr>
        </tbody>
      </table>
    ),

    eclairage:
      "Une classe abstraite sert de modèle général non instanciable."
  },

  // ================= PYTHON =================

  7: {
    titre: "Python : Classe Personne",
    enonce:
      "Créer une classe Personne avec nom et méthode sePresenter().",

    solution: (
      <pre className="bg-zinc-800 p-4 rounded">
{`class Personne:
    def __init__(self, nom):
        self.nom = nom

    def sePresenter(self):
        print("Je m'appelle", self.nom)`}
      </pre>
    ),

    eclairage:
      "__init__ initialise l’objet."
  },

  8: {
    titre: "Python : Classe Compte",
    enonce:
      "Créer une classe Compte avec solde et deposer().",

    solution: (
      <pre className="bg-zinc-800 p-4 rounded">
{`class Compte:
    def __init__(self, solde):
        self.solde = solde

    def deposer(self, m):
        self.solde += m`}
      </pre>
    ),

    eclairage:
      "Les méthodes modifient l’état de l’objet."
  },

  9: {
    titre: "Python : Encapsulation",
    enonce:
      "Créer une classe Compte avec solde privé.",

    solution: (
      <pre className="bg-zinc-800 p-4 rounded">
{`class Compte:
    def __init__(self):
        self.__solde = 0`}
      </pre>
    ),

    eclairage:
      "Double underscore → attribut privé."
  },

  10: {
    titre: "Python : Héritage",
    enonce:
      "Créer Animal et Chien.",

    solution: (
      <pre className="bg-zinc-800 p-4 rounded">
{`class Animal:
    pass

class Chien(Animal):
    pass`}
      </pre>
    ),

    eclairage:
      "Chien hérite de Animal."
  },

  11: {
    titre: "Python : Polymorphisme",
    enonce:
      "Créer deux classes avec parler().",

    solution: (
      <pre className="bg-zinc-800 p-4 rounded">
{`class Chien:
    def parler(self):
        print("Aboie")

class Chat:
    def parler(self):
        print("Miaule")`}
      </pre>
    ),

    eclairage:
      "Même méthode → comportements différents."
  },

  12: {
    titre: "Python : Abstraction",
    enonce:
      "Créer une classe abstraite Forme.",

    solution: (
      <pre className="bg-zinc-800 p-4 rounded">
{`from abc import ABC, abstractmethod

class Forme(ABC):
    @abstractmethod
    def surface(self):
        pass`}
      </pre>
    ),

    eclairage:
      "Classe abstraite non instanciable."
  }

};

export default function TP() {

  const { id } = useParams();
  const numId = Number(id);
  const tp = tps[numId];

  const [show, setShow] = useState(false);

  if (!tp) {
    return (
      <div className="p-8 text-center">
        <BackButton />
        <h1 className="text-2xl font-bold mb-4">
          TP non disponible
        </h1>
        <Link
          to="/cours"
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Retour au cours
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <BackButton />

      <h1 className="text-3xl font-bold mb-6">
        TP — Chapitre {numId} : {tp.titre}
      </h1>

      <p className="mb-6 text-zinc-300">{tp.enonce}</p>

      <button
        onClick={() => setShow(!show)}
        className="bg-emerald-600 px-4 py-2 rounded"
      >
        {show ? "Masquer solution" : "Voir solution"}
      </button>

      {show && (
        <div className="mt-8 space-y-6">

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Correction
            </h2>
            {tp.solution}
          </div>

          <div className="bg-yellow-900/30 border border-yellow-600 p-4 rounded">
            <h3 className="font-semibold text-yellow-300 mb-2">
              💡 Éclairage pédagogique
            </h3>
            <p className="text-zinc-300">{tp.eclairage}</p>
          </div>

        </div>
      )}

      <div className="mt-10">
        <Link
          to={`/lecon/${numId}`}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Retour à la leçon
        </Link>
      </div>

    </div>
  );
}