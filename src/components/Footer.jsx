export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">

        {/* Creator */}
        <p className="text-zinc-300">
          Créé par <span className="font-semibold text-emerald-500">
            ISMAIL MARKHI
          </span> en utilisant des outils IA
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm">

          <a
            href="https://github.com/IsmailMarkhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/ismailmarkhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/ismail-markhi-a67033317/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            LinkedIn
          </a>          

        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} ISMAIL MARKHI — Tous droits réservés
        </p>

      </div>

    </footer>
  );
}