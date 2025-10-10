import Link from 'next/link'
import { Play, Users, Trophy, Star, Calendar, TrendingUp } from 'lucide-react'

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jogos Suportados
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Explore os jogos mais populares do Roblox com campeonatos ativos
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Arsenal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Arsenal</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Um jogo de tiro em primeira pessoa onde você compete contra outros jogadores 
                  em rounds de eliminação. Habilidade e precisão são fundamentais.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    2,500+ jogadores ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    45 campeonatos realizados
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    R$ 25K+ em prêmios
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/tournaments?game=arsenal" 
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Ver Campeonatos
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Blox Fruits */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Blox Fruits</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Um RPG de aventura baseado em One Piece onde você pode comer frutos do diabo, 
                  aprender habilidades e lutar contra outros jogadores.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    3,200+ jogadores ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    38 campeonatos realizados
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    R$ 18K+ em prêmios
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/tournaments?game=blox-fruits" 
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Ver Campeonatos
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Adopt Me */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Adopt Me</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.7</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Um jogo de simulação onde você pode adotar pets, decorar sua casa e 
                  participar de eventos especiais com outros jogadores.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    1,800+ jogadores ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    22 campeonatos realizados
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    R$ 12K+ em prêmios
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/tournaments?game=adopt-me" 
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Ver Campeonatos
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jailbreak */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Jailbreak</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.6</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Um jogo de ação onde você pode ser um criminoso ou policial. 
                  Roube bancos, escape da prisão ou capture criminosos.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    2,100+ jogadores ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    31 campeonatos realizados
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    R$ 15K+ em prêmios
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/tournaments?game=jailbreak" 
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Ver Campeonatos
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tower Defense */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Tower Defense</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Estratégia em tempo real onde você constrói torres para defender 
                  sua base contra ondas de inimigos.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    950+ jogadores ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    18 campeonatos realizados
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    R$ 8K+ em prêmios
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/tournaments?game=tower-defense" 
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Ver Campeonatos
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Brookhaven */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Brookhaven</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.4</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Um jogo de roleplay onde você pode viver uma vida virtual, 
                  trabalhar, comprar casas e interagir com outros jogadores.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    1,200+ jogadores ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    12 campeonatos realizados
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    R$ 6K+ em prêmios
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/tournaments?game=brookhaven" 
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Ver Campeonatos
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Em Breve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Pet Simulator X</h3>
                <p className="text-sm text-gray-500">Em desenvolvimento</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Royale High</h3>
                <p className="text-sm text-gray-500">Em desenvolvimento</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Murder Mystery 2</h3>
                <p className="text-sm text-gray-500">Em desenvolvimento</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Tower Heroes</h3>
                <p className="text-sm text-gray-500">Em desenvolvimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
