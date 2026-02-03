import Link from "next/link";
import { MoodSelector } from "@/components/MoodSelector";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-200 px-6 py-16 font-sans dark:from-zinc-950 dark:via-zinc-950 dark:to-emerald-950">
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
        <div className="mx-auto h-full w-full max-w-5xl bg-[radial-gradient(circle_at_top,_#34d399_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_#22c55e_0%,_transparent_60%)]" />
      </div>

      <main className="flex w-full max-w-4xl flex-col items-center gap-12 text-center text-zinc-900 dark:text-zinc-100 lg:text-left">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
            Olá, tudo bem?
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Bem-vindo a um cantinho acolhedor para celebrar o português do
            dia-a-dia.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Use este espaço para inspirar conversas em português e encontrar uma
            resposta simpática para compartilhar com quem perguntou “Tudo bem?”.
            Pequenos gestos fazem uma grande diferença.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <span className="rounded-full bg-white/70 px-4 py-2 shadow dark:bg-zinc-900/70">
              Linguagem afetuosa
            </span>
            <span className="rounded-full bg-white/70 px-4 py-2 shadow dark:bg-zinc-900/70">
              Boas energias
            </span>
            <span className="rounded-full bg-white/70 px-4 py-2 shadow dark:bg-zinc-900/70">
              Conexões reais
            </span>
          </div>
        </div>

        <MoodSelector />

        <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/70 p-8 text-left shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Quer ir além do &quot;Tudo bem?&quot;
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Faça um registro rápido das suas conversas e reflita sobre como elas
            te fizeram sentir. Anotar pequenas interações constrói memórias
            afetuosas.
          </p>
          <div className="mt-4 flex flex-wrap justify-between gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Dica rápida</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Comece dizendo algo que admira na outra pessoa.
              </span>
            </div>
            <Link
              href="https://www.notion.so/templates"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:hover:bg-emerald-400/90"
            >
              Montar diário rápido →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
