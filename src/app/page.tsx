import Link from 'next/link'
import { Users, Calendar, Trophy, TrendingUp, Gamepad2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Infinity Symbol */}
            <div className="text-8xl mb-4 text-cyan-400 animate-pulse">
              ♾️
            </div>
            
            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide text-white">
              INFINITY
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
              Nós somos Infinity
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl">
              Uma guild global unida por uma só missão: dominar todos os mundos digitais
            </p>
          </div>

          {/* Game Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Raven 2 Card */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
                <Gamepad2 className="h-24 w-24 text-white opacity-30" />
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-2xl font-bold text-white">Raven 2</h3>
              </div>
            </div>

            {/* Legend of Ymir Card */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
                <Gamepad2 className="h-24 w-24 text-white opacity-30" />
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-2xl font-bold text-white">Legend of Ymir</h3>
              </div>
            </div>

            {/* Albion Online Card */}
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center">
                <Gamepad2 className="h-24 w-24 text-white opacity-30" />
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-2xl font-bold text-white">Albion Online</h3>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105">
              Entrar na Guild
            </button>
            <button className="bg-transparent hover:bg-gray-800 border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Explorar Divisões
            </button>
            <button className="bg-transparent hover:bg-gray-800 border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Conectar com Discord
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-900 py-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Statistics */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">Estatísticas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">1.248</div>
                      <div className="text-gray-400 text-sm">Membros ativos</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">315</div>
                      <div className="text-gray-400 text-sm">Eventos concluídos</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">189</div>
                      <div className="text-gray-400 text-sm">NFTs conquistados</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">4</div>
                      <div className="text-gray-400 text-sm">Ranking atual</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Divisions Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Divisões</h2>
                <div className="space-y-4">
                  {/* Raven 2 */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center">
                          <Gamepad2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Raven 2</div>
                          <div className="text-cyan-400 text-sm">272 ativos</div>
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold text-2xl">372</div>
                    </div>
                  </div>

                  {/* Legend of Ymir */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                          <Gamepad2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Legend of Ymir</div>
                          <div className="text-cyan-400 text-sm">251 ativos</div>
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold text-2xl">261</div>
                    </div>
                  </div>

                  {/* Albion Online */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-lg flex items-center justify-center">
                          <Gamepad2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Albion Online</div>
                          <div className="text-cyan-400 text-sm">176 ativos</div>
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold text-2xl">178</div>
                    </div>
                  </div>

                  {/* Guild Wars 2 */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                          <Gamepad2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Guild Wars 2</div>
                          <div className="text-cyan-400 text-sm">6 ativos</div>
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold text-2xl">0</div>
                    </div>
                  </div>

                  {/* Mir4 */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-700 rounded-lg flex items-center justify-center">
                          <Gamepad2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Mir4</div>
                          <div className="text-cyan-400 text-sm">87 ativos</div>
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold text-2xl">97</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
