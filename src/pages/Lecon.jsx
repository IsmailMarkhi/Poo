import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const ordre = [1,2,3,4,5,6,7,8,9,10,11,12];

const lecons = {

  // ===== CONCEPTUEL =====

  1: {
    titre: "Concepts POO",
    texte: `
La Programmation Orientée Objet (POO) est un paradigme
qui permet de représenter un système sous forme d’objets.

Chaque objet possède :
• un état (ses caractéristiques)
• un comportement (ses actions)

Exemple : une voiture
État → couleur, vitesse
Comportement → accélérer, freiner

La POO facilite la compréhension,
la maintenance et la réutilisation du code.
`
  },

  2: {
    titre: "Objet et Classe",
    texte: `
Une classe est un modèle permettant de créer des objets.

Un objet est une instance de cette classe.

Classe : Étudiant
Objets : Ahmed, Sara, Youssef

La classe définit les attributs et les méthodes
que posséderont tous les objets créés.
`
  },

  3: {
    titre: "Encapsulation conceptuelle",
    texte: `
L’encapsulation consiste à regrouper les données
et les méthodes dans une même entité.

Elle permet aussi de protéger certaines informations
contre un accès direct.

L’objectif est d’assurer la sécurité
et l’intégrité des données.
`
  },

  4: {
    titre: "Héritage conceptuel",
    texte: `
L’héritage permet de créer une classe dérivée
à partir d’une classe existante.

La classe enfant hérite des attributs
et méthodes de la classe parent.

Exemple :
Animal → Chien, Chat

Cela permet la réutilisation du modèle
et évite la duplication.
`
  },

  5: {
    titre: "Polymorphisme conceptuel",
    texte: `
Le polymorphisme signifie "plusieurs formes".

Une même action peut produire des résultats
différents selon l’objet.

Exemple :
Se déplacer
• Voiture → roule
• Avion → vole
• Bateau → navigue
`
  },

  6: {
    titre: "Abstraction conceptuelle",
    texte: `
L’abstraction consiste à ne montrer
que les informations essentielles
et à masquer les détails inutiles.

Elle simplifie la complexité d’un système
en se concentrant sur l’essentiel.
`
  },

  // ===== PYTHON =====

  7: {
    titre: "Classes en Python",
    texte: `
En Python, une classe est définie avec le mot-clé "class".

Elle permet de créer des objets
ayant les mêmes caractéristiques.

Le constructeur __init__ initialise l’objet.
`,
    code: `class Voiture:
    def __init__(self, marque):
        self.marque = marque`
  },

  8: {
    titre: "Attributs et méthodes",
    texte: `
Les attributs représentent les données d’un objet.
Les méthodes représentent ses actions.

Chaque objet possède ses propres valeurs d’attributs.
`,
    code: `class Compte:
    def __init__(self, solde):
        self.solde = solde

    def deposer(self, m):
        self.solde += m`
  },

  9: {
    titre: "Encapsulation en Python",
    texte: `
Python utilise des conventions pour la visibilité :

nom → public
_nom → protégé
__nom → privé

Cela permet de contrôler l’accès aux données.
`
  },

  10: {
    titre: "Héritage en Python",
    texte: `
Une classe peut hériter d’une autre
en la plaçant entre parenthèses.
`,
    code: `class Animal:
    pass

class Chien(Animal):
    pass`
  },

  11: {
    titre: "Polymorphisme en Python",
    texte: `
Plusieurs classes peuvent implémenter
la même méthode avec des comportements différents.

C’est une application directe
du polymorphisme conceptuel.
`
  },

  12: {
    titre: "Abstraction en Python",
    texte: `
Python permet de définir des classes abstraites
grâce au module abc.

Une classe abstraite ne peut pas être instanciée
directement.
`
  }

};

export default function Lecon() {

  const { id } = useParams();
  const numId = Number(id);

  const index = ordre.indexOf(numId);
  const prev = ordre[index - 1];
  const next = ordre[index + 1];

  const lecon = lecons[numId];

  if (!lecon) {
    return (
      <div className="p-8">
        <BackButton />
        <h1>Leçon introuvable</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <BackButton />

      <h1 className="text-3xl font-bold mb-6">
        Leçon {numId} — {lecon.titre}
      </h1>

      <pre className="whitespace-pre-wrap text-zinc-300 mb-6">
        {lecon.texte}
      </pre>

      {lecon.code && (
        <pre className="bg-zinc-800 p-4 rounded mb-6">
{lecon.code}
        </pre>
      )}

      {/* Actions pédagogiques */}
      <div className="flex flex-wrap gap-4 mt-8">

        <Link
          to={`/tp/${numId}`}
          className="bg-orange-600 px-4 py-2 rounded"
        >
          🧪 TP du chapitre
        </Link>

        {numId === 12 && (
          <Link
            to="/efm"
            className="bg-red-600 px-4 py-2 rounded"
          >
            🏁 Passer l’EFM
          </Link>
        )}

      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-12">

        {prev && (
          <Link to={`/lecon/${prev}`}
            className="bg-zinc-800 px-4 py-2 rounded">
            ← Précédent
          </Link>
        )}

        <Link to="/cours"
          className="bg-blue-600 px-4 py-2 rounded">
          Sommaire
        </Link>

        {next && (
          <Link to={`/lecon/${next}`}
            className="bg-emerald-600 px-4 py-2 rounded">
            Suivant →
          </Link>
        )}

      </div>

    </div>
  );
}