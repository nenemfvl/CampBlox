import Link from 'next/link'
import { Trophy, Users, Calendar, Clock, Filter, Search } from 'lucide-react'

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Campeonatos Disponíveis
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Encontre o campeonato perfeito para você e mostre suas habilidades
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar campeonatos..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full sm:w-64"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="h-4 w-4" />
                  Filtros
                </button>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Todos os jogos</option>
                  <option>Arsenal</option>
                  <option>Blox Fruits</option>
                  <option>Adopt Me</option>
                  <option>Jailbreak</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Mostrando 12 de 150+ campeonatos
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tournament Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Arsenal
                  </span>
                  <span className="text-sm text-green-600 font-medium">Ao vivo</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Arsenal Championship 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Torneio de eliminação com os melhores jogadores de Arsenal. 
                  Competição acirrada com prêmios incríveis.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    128/256 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 15/01/2025 às 20:00
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 3 horas
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    R$ 5.000
                  </div>
                  <div className="text-sm text-gray-500">
                    Eliminação simples
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Participar Agora
                </button>
              </div>
            </div>

            {/* Tournament Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Blox Fruits
                  </span>
                  <span className="text-sm text-blue-600 font-medium">Em breve</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Blox Fruits PvP Masters
                </h3>
                <p className="text-gray-600 mb-4">
                  Competição de PvP com os frutos mais poderosos. 
                  Mostre sua habilidade em combate.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    64/128 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 20/01/2025 às 19:00
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 4 horas
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    R$ 3.000
                  </div>
                  <div className="text-sm text-gray-500">
                    Round Robin
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>

            {/* Tournament Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Adopt Me
                  </span>
                  <span className="text-sm text-orange-600 font-medium">Registros abertos</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Adopt Me Pet Show
                </h3>
                <p className="text-gray-600 mb-4">
                  Mostre seus pets mais raros e ganhe prêmios incríveis. 
                  Competição de beleza e raridade.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    32/64 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 25/01/2025 às 18:00
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 2 horas
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    R$ 2.000
                  </div>
                  <div className="text-sm text-gray-500">
                    Avaliação por juízes
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>

            {/* Tournament Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Jailbreak
                  </span>
                  <span className="text-sm text-gray-600 font-medium">Finalizado</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Jailbreak Heist Masters
                </h3>
                <p className="text-gray-600 mb-4">
                  Competição de roubos e fugas. Mostre suas habilidades 
                  como criminoso ou policial.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    96/96 jogadores
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Finalizado em 10/01/2025
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 5 horas
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    R$ 4.500
                  </div>
                  <div className="text-sm text-gray-500">
                    Equipes de 4
                  </div>
                </div>
                <button className="w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed">
                  Finalizado
                </button>
              </div>
            </div>

            {/* Tournament Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Tower Defense
                  </span>
                  <span className="text-sm text-blue-600 font-medium">Em breve</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tower Defense Champions
                </h3>
                <p className="text-gray-600 mb-4">
                  Estratégia e planejamento são fundamentais nesta 
                  competição de tower defense.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    48/80 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 30/01/2025 às 17:00
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 6 horas
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    R$ 3.500
                  </div>
                  <div className="text-sm text-gray-500">
                    Individual
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>

            {/* Tournament Card 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                    Brookhaven
                  </span>
                  <span className="text-sm text-orange-600 font-medium">Registros abertos</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Brookhaven Roleplay Contest
                </h3>
                <p className="text-gray-600 mb-4">
                  Competição de roleplay criativo. Mostre sua criatividade 
                  e habilidades de interpretação.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    16/32 jogadores inscritos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Início: 05/02/2025 às 16:00
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Duração: 3 horas
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    R$ 1.500
                  </div>
                  <div className="text-sm text-gray-500">
                    Avaliação criativa
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
              Carregar Mais Campeonatos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
