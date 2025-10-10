import Link from 'next/link'
import { Trophy, Medal, Crown, Star, TrendingUp, Search, Filter } from 'lucide-react'

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Ranking Global
          </h1>
          <p className="text-xl text-purple-100">
            Veja os melhores jogadores e suas conquistas
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
                  placeholder="Buscar jogador..."
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
                <option>Jailbreak</option>
              </select>
            </div>
            <div className="text-gray-400 text-sm">
              Atualizado há 5 minutos
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Table */}
      <section className="py-8 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Posição</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Jogador</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Pontos</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Vitórias</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Jogos</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Taxa de Vitória</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Prêmios</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {/* 1st Place */}
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Crown className="h-6 w-6 text-yellow-400 mr-2" />
                        <span className="text-lg font-bold text-white">1º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">P</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">ProGamer2025</div>
                          <div className="text-gray-400 text-sm">Arsenal Master</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">2,847</td>
                    <td className="px-6 py-4 text-green-400 font-medium">156</td>
                    <td className="px-6 py-4 text-gray-300">178</td>
                    <td className="px-6 py-4 text-green-400 font-medium">87.6%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 12,500</td>
                  </tr>

                  {/* 2nd Place */}
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Medal className="h-6 w-6 text-gray-300 mr-2" />
                        <span className="text-lg font-bold text-white">2º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">SkillMaster</div>
                          <div className="text-gray-400 text-sm">Blox Fruits Pro</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">2,634</td>
                    <td className="px-6 py-4 text-green-400 font-medium">142</td>
                    <td className="px-6 py-4 text-gray-300">165</td>
                    <td className="px-6 py-4 text-green-400 font-medium">86.1%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 9,800</td>
                  </tr>

                  {/* 3rd Place */}
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Medal className="h-6 w-6 text-orange-400 mr-2" />
                        <span className="text-lg font-bold text-white">3º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">L</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">LegendaryPlayer</div>
                          <div className="text-gray-400 text-sm">Multi-Game</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">2,421</td>
                    <td className="px-6 py-4 text-green-400 font-medium">128</td>
                    <td className="px-6 py-4 text-gray-300">152</td>
                    <td className="px-6 py-4 text-green-400 font-medium">84.2%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 8,200</td>
                  </tr>

                  {/* 4th Place */}
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">4º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">A</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">AceGamer</div>
                          <div className="text-gray-400 text-sm">Adopt Me Expert</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">2,198</td>
                    <td className="px-6 py-4 text-green-400 font-medium">115</td>
                    <td className="px-6 py-4 text-gray-300">138</td>
                    <td className="px-6 py-4 text-green-400 font-medium">83.3%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 6,500</td>
                  </tr>

                  {/* 5th Place */}
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">5º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">N</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">NinjaWarrior</div>
                          <div className="text-gray-400 text-sm">Jailbreak Master</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">2,056</td>
                    <td className="px-6 py-4 text-green-400 font-medium">108</td>
                    <td className="px-6 py-4 text-gray-300">132</td>
                    <td className="px-6 py-4 text-green-400 font-medium">81.8%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 5,800</td>
                  </tr>

                  {/* More rows... */}
                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">6º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">R</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">RocketRider</div>
                          <div className="text-gray-400 text-sm">Brookhaven Pro</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">1,923</td>
                    <td className="px-6 py-4 text-green-400 font-medium">98</td>
                    <td className="px-6 py-4 text-gray-300">125</td>
                    <td className="px-6 py-4 text-green-400 font-medium">78.4%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 4,200</td>
                  </tr>

                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">7º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">T</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">TowerDefender</div>
                          <div className="text-gray-400 text-sm">Strategy Expert</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">1,847</td>
                    <td className="px-6 py-4 text-green-400 font-medium">92</td>
                    <td className="px-6 py-4 text-gray-300">118</td>
                    <td className="px-6 py-4 text-green-400 font-medium">78.0%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 3,600</td>
                  </tr>

                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">8º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">P</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">PetCollector</div>
                          <div className="text-gray-400 text-sm">Pet Simulator</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">1,734</td>
                    <td className="px-6 py-4 text-green-400 font-medium">87</td>
                    <td className="px-6 py-4 text-gray-300">112</td>
                    <td className="px-6 py-4 text-green-400 font-medium">77.7%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 3,100</td>
                  </tr>

                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">9º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">R</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">RoyalHigh</div>
                          <div className="text-gray-400 text-sm">Fashion Expert</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">1,652</td>
                    <td className="px-6 py-4 text-green-400 font-medium">83</td>
                    <td className="px-6 py-4 text-gray-300">108</td>
                    <td className="px-6 py-4 text-green-400 font-medium">76.9%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 2,800</td>
                  </tr>

                  <tr className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="text-lg font-bold text-white">10º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">C</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">ChampionRise</div>
                          <div className="text-gray-400 text-sm">Rising Star</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white font-bold">1,589</td>
                    <td className="px-6 py-4 text-green-400 font-medium">79</td>
                    <td className="px-6 py-4 text-gray-300">105</td>
                    <td className="px-6 py-4 text-green-400 font-medium">75.2%</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">R$ 2,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              <TrendingUp className="h-5 w-5 inline mr-2" />
              Ver Mais Rankings
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}