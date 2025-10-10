import Link from 'next/link'
import { Gamepad2, Users, Trophy, Star, Play, Search, Filter } from 'lucide-react'

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Jogos Disponíveis
          </h1>
          <p className="text-xl text-purple-100">
            Explore os jogos mais populares e participe de campeonatos
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-6 bg-gray-800 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar jogos..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <button className="flex items-center px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </button>
              <select className="px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none">
                <option>Todas as categorias</option>
                <option>FPS</option>
                <option>RPG</option>
                <option>Simulação</option>
                <option>Estratégia</option>
              </select>
            </div>
            <div className="text-gray-400 text-sm">
              Mostrando 8 de 50+ jogos
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-8 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game Card 1 - Arsenal */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Arsenal</h3>
                <p className="text-gray-300 mb-4">
                  FPS competitivo com armas únicas e mecânicas inovadoras
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    2.5M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    15 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.8/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 2 - Blox Fruits */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Blox Fruits</h3>
                <p className="text-gray-300 mb-4">
                  RPG de aventura com frutos do diabo e combate épico
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    1.8M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    12 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.7/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 3 - Adopt Me */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Adopt Me</h3>
                <p className="text-gray-300 mb-4">
                  Simulação de adoção de pets com coleção e customização
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    3.2M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    8 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.9/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 4 - Jailbreak */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Jailbreak</h3>
                <p className="text-gray-300 mb-4">
                  Simulação de crime e polícia com perseguições épicas
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    1.5M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    6 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.6/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 5 - Brookhaven */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Brookhaven</h3>
                <p className="text-gray-300 mb-4">
                  Roleplay livre com casas, carros e interações sociais
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    2.1M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    4 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.5/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 6 - Tower Defense */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Tower Defense</h3>
                <p className="text-gray-300 mb-4">
                  Estratégia com torres e ondas de inimigos desafiadoras
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    800K+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    3 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.4/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 7 - Pet Simulator */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Pet Simulator</h3>
                <p className="text-gray-300 mb-4">
                  Simulação de pets com evolução e coleção infinita
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    1.2M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    5 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.3/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>

            {/* Game Card 8 - Royale High */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Gamepad2 className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Royale High</h3>
                <p className="text-gray-300 mb-4">
                  RPG de fantasia com escola mágica e customização
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    1.9M+ jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    7 campeonatos ativos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    4.7/5 avaliação
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Ver Campeonatos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
