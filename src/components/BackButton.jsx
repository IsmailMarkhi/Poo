import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-6 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded"
    >
      ← Retour
    </button>
  );
}