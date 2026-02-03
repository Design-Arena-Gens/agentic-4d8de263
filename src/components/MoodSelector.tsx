import { useMemo, useState } from "react";

type Mood = {
  id: string;
  label: string;
  reply: string;
  tip: string;
};

const MOODS: Mood[] = [
  {
    id: "bem",
    label: "Estou ótimo!",
    reply: "Que bom! Continue espalhando essa energia boa. ✨",
    tip: "Compartilhe algo positivo com alguém hoje.",
  },
  {
    id: "ok",
    label: "Mais ou menos",
    reply: "Tudo bem ter dias medianos. Respira fundo e segue em frente. 🌿",
    tip: "Uma caminhada curta pode mudar o tom do seu dia.",
  },
  {
    id: "cansado",
    label: "Cansado",
    reply: "Você merece um descanso. Pare por alguns minutos e recarregue. ☕️",
    tip: "Que tal preparar um café ou alongar o corpo agora?",
  },
  {
    id: "animado",
    label: "Animado!",
    reply: "Ótimo! Canalize essa empolgação em algo criativo. 🚀",
    tip: "Anote rapidamente aquela ideia que está na cabeça.",
  },
];

export function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(MOODS[0]);

  const suggestion = useMemo(() => {
    if (!selectedMood) {
      return null;
    }

    return {
      reply: selectedMood.reply,
      tip: selectedMood.tip,
    };
  }, [selectedMood]);

  return (
    <section className="w-full max-w-2xl rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-black/10 backdrop-blur-md transition dark:bg-black/50 dark:ring-white/10">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Como você está se sentindo hoje?
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Selecione a opção que mais combina com o seu dia e receba uma resposta
        calorosa.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {MOODS.map((mood) => {
          const isActive = selectedMood?.id === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood)}
              className={`rounded-2xl border px-4 py-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black ${
                isActive
                  ? "border-emerald-400 bg-emerald-50 text-emerald-900 shadow-inner dark:border-emerald-500/60 dark:bg-emerald-500/10 dark:text-emerald-100"
                  : "border-zinc-200 bg-white text-zinc-800 hover:border-emerald-200 hover:bg-emerald-50/60 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10"
              }`}
              type="button"
            >
              <span className="text-base font-medium">{mood.label}</span>
            </button>
          );
        })}
      </div>

      {suggestion ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-emerald-900 transition dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100">
          <p className="text-lg font-medium">Resposta:</p>
          <p className="mt-1 text-base">{suggestion.reply}</p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-emerald-700/80 dark:text-emerald-200/80">
            Dica rápida
          </p>
          <p className="text-sm">{suggestion.tip}</p>
        </div>
      ) : null}
    </section>
  );
}
