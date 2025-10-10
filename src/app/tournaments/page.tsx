import Link from 'next/link'
import { Trophy, Users, Calendar, Clock, Play, Filter, Search } from 'lucide-react'

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Campeonatos Disponíveis
          </h1>
          <p className="text-xl text-purple-100">
            Encontre o campeonato perfeito para você e mostre suas habilidades
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
                  placeholder="Buscar campeonatos..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <button className="flex items-center px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </button>
              <select className="px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none">
                <option>Todos os jogos</option>
                <option>Arsenal</option>
                <option>Blox Fruits</option>
                <option>Adopt Me</option>
              </select>
            </div>
            <div className="text-gray-400 text-sm">
              Mostrando 12 de 150+ campeonatos
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-8 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tournament Card 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Arsenal
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Ao vivo
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Arsenal Championship 2025
                </h3>
                <p className="text-gray-300 mb-4">
                  Torneio de eliminação com os melhores jogadores de Arsenal. Competição acirrada com prêmios incríveis.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    128/256 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 15/01/2025 às 20:00
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 3 horas
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-green-400">R$ 5.000</div>
                  <div className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                    Eliminação simples
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Participar
                </button>
              </div>
            </div>

            {/* Tournament Card 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Blox Fruits
                  </span>
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Em breve
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Blox Fruits PvP Masters
                </h3>
                <p className="text-gray-300 mb-4">
                  Competição de PvP com os frutos mais poderosos. Mostre sua habilidade em combate.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    64/128 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 20/01/2025 às 19:00
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 4 horas
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-green-400">R$ 3.000</div>
                  <div className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                    Round Robin
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Inscrever-se
                </button>
              </div>
            </div>

            {/* Tournament Card 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Adopt Me
                  </span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Registros abertos
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Adopt Me Pet Show
                </h3>
                <p className="text-gray-300 mb-4">
                  Mostre seus pets mais raros e ganhe prêmios incríveis. Competição de beleza e raridade.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    32/64 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 25/01/2025 às 18:00
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 2 horas
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-green-400">R$ 2.000</div>
                  <div className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                    Avaliação por juízes
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Play className="h-4 w-4 inline mr-2" />
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}