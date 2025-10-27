import Link from 'next/link'
// Fixed Discord icon import issue
import { Trophy, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">N</span>
              </div>
              <span className="text-2xl font-bold text-white">INFINITY</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Uma guild global unida por uma só missão: dominar todos os mundos digitais.
              Junte-se à maior comunidade de jogadores profissionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  NFTs
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Regras
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Infinity Guild. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors mr-4">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
