import { Trophy, Medal, Award, Crown, TrendingUp, Users, Calendar } from 'lucide-react'

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ranking Global
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Veja os melhores jogadores e suas conquistas nos campeonatos
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-white">
              <Crown className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">ProGamer2025</div>
              <div className="text-sm opacity-90">Campeão Geral</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl text-white">
              <Medal className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">SkillMaster</div>
              <div className="text-sm opacity-90">Vice-Campeão</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl text-white">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">ElitePlayer</div>
              <div className="text-sm opacity-90">3º Lugar</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl text-white">
              <Trophy className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">2,847</div>
              <div className="text-sm opacity-90">Jogadores Ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium">
              Geral
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
              Arsenal
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
              Blox Fruits
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
              Adopt Me
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
              Jailbreak
            </button>
          </div>

          {/* Ranking Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Posição</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Jogador</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Pontos</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Vitórias</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Participações</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Prêmios</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* 1st Place */}
                  <tr className="bg-gradient-to-r from-yellow-50 to-orange-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Crown className="h-6 w-6 text-yellow-500 mr-2" />
                        <span className="font-bold text-lg">1º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          P
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">ProGamer2025</div>
                          <div className="text-sm text-gray-500">Nível 50</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-yellow-600">2,847</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">45</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">67</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">R$ 12.500</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Online
                      </span>
                    </td>
                  </tr>

                  {/* 2nd Place */}
                  <tr className="bg-gradient-to-r from-gray-50 to-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Medal className="h-6 w-6 text-gray-400 mr-2" />
                        <span className="font-bold text-lg">2º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          S
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">SkillMaster</div>
                          <div className="text-sm text-gray-500">Nível 48</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-gray-600">2,634</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">38</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">59</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">R$ 9.800</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Online
                      </span>
                    </td>
                  </tr>

                  {/* 3rd Place */}
                  <tr className="bg-gradient-to-r from-orange-50 to-red-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Award className="h-6 w-6 text-orange-500 mr-2" />
                        <span className="font-bold text-lg">3º</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          E
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">ElitePlayer</div>
                          <div className="text-sm text-gray-500">Nível 46</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-orange-600">2,421</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">32</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">54</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">R$ 7.200</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        Offline
                      </span>
                    </td>
                  </tr>

                  {/* 4th Place */}
                  <tr>
                    <td className="px-6 py-4">
                      <span className="font-bold text-lg">4º</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          T
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">TopGamer</div>
                          <div className="text-sm text-gray-500">Nível 44</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-blue-600">2,198</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">28</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">48</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">R$ 5.600</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Online
                      </span>
                    </td>
                  </tr>

                  {/* 5th Place */}
                  <tr>
                    <td className="px-6 py-4">
                      <span className="font-bold text-lg">5º</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          M
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">MasterPlayer</div>
                          <div className="text-sm text-gray-500">Nível 42</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-green-600">1,987</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">25</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">43</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">R$ 4.200</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        Offline
                      </span>
                    </td>
                  </tr>

                  {/* More players... */}
                  {[6, 7, 8, 9, 10].map((position) => (
                    <tr key={position}>
                      <td className="px-6 py-4">
                        <span className="font-semibold">{position}º</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">
                            {String.fromCharCode(65 + position - 1)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Player{position}</div>
                            <div className="text-sm text-gray-500">Nível {40 - position}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-600">{2000 - (position * 50)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-green-600 font-semibold">{25 - position}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{40 - position}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-green-600 font-semibold">R$ {(4000 - (position * 200)).toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          position % 2 === 0 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {position % 2 === 0 ? 'Online' : 'Offline'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
              Carregar Mais Jogadores
            </button>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Conquistas Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 mr-3" />
                <div>
                  <div className="font-bold text-lg">Arsenal Championship</div>
                  <div className="text-sm opacity-90">ProGamer2025</div>
                </div>
              </div>
              <div className="text-sm opacity-90">
                <Calendar className="h-4 w-4 inline mr-1" />
                Há 2 horas
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Medal className="h-8 w-8 mr-3" />
                <div>
                  <div className="font-bold text-lg">Blox Fruits Masters</div>
                  <div className="text-sm opacity-90">SkillMaster</div>
                </div>
              </div>
              <div className="text-sm opacity-90">
                <Calendar className="h-4 w-4 inline mr-1" />
                Há 5 horas
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-teal-400 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <div>
                  <div className="font-bold text-lg">Adopt Me Pet Show</div>
                  <div className="text-sm opacity-90">ElitePlayer</div>
                </div>
              </div>
              <div className="text-sm opacity-90">
                <Calendar className="h-4 w-4 inline mr-1" />
                Há 1 dia
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
