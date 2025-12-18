"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 font-sans">
      <main className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            CampBlox
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            A plataforma definitiva para torneios de Roblox e gestão de famílias.
          </p>
        </div>

        {session ? (
          <div className="flex flex-col items-center gap-4 p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div className="text-center">
              <p className="font-medium text-zinc-900">Bem-vindo, {session.user?.name}!</p>
              <p className="text-sm text-zinc-500">{session.user?.email}</p>
            </div>
            <button
              onClick={() => signOut()}
              className="px-6 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-2 px-8 py-3 text-base font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Entrar com Google
            </button>
            <p className="text-xs text-zinc-400 italic">
              * Necessário configurar as variáveis de ambiente do Google Cloud.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <h3 className="font-semibold text-zinc-900">Torneios Diários</h3>
            <p className="text-sm text-zinc-600 mt-2">
              Participe de competições e ganhe Robux ou prêmios exclusivos.
            </p>
          </div>
          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <h3 className="font-semibold text-zinc-900">Sistema de Famílias</h3>
            <p className="text-sm text-zinc-600 mt-2">
              Crie ou junte-se a famílias para competir em equipe e subir no ranking.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-zinc-400 text-sm">
        &copy; {new Date().getFullYear()} CampBlox. Todos os direitos reservados.
      </footer>
    </div>
  );
}
