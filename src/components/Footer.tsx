import Link from 'next/link'
import { Trophy, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">CampBlox</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A plataforma definitiva para campeonatos de jogos do Roblox. 
              Conecte-se com jogadores, participe de torneios e mostre suas habilidades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tournaments" className="text-gray-400 hover:text-white transition-colors">
                  Campeonatos
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-white transition-colors">
                  Jogos
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-gray-400 hover:text-white transition-colors">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-white transition-colors">
                  Regras
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-gray-400 hover:text-white transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-gray-400 hover:text-white transition-colors">
                  Reportar Problema
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CampBlox. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors mr-4">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
