import Link from 'next/link'
import { Trophy, Users, Calendar, Star, Play, Award, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Campeonatos de <span className="text-yellow-300">Roblox</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Conecte-se com jogadores, participe de torneios épicos e mostre suas habilidades 
              na maior plataforma de campeonatos do Roblox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tournaments" 
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                <Trophy className="h-5 w-5 inline mr-2" />
                Ver Campeonatos
              </Link>
              <Link 
                href="/games" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Play className="h-5 w-5 inline mr-2" />
                Explorar Jogos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Jogadores Ativos</div>
            </div>
            <div className="p-6">
              <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Campeonatos</div>
            </div>
            <div className="p-6">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">R$ 50K+</div>
              <div className="text-gray-600">Em Prêmios</div>
            </div>
            <div className="p-6">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campeonatos em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Participe dos maiores torneios do momento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tournament Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Arsenal
                  </span>
                  <span className="text-sm text-gray-500">Ao vivo</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Arsenal Championship 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Torneio de eliminação com os melhores jogadores de Arsenal
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    128/256 jogadores
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    R$ 5.000
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Participar
                </button>
              </div>
            </div>

            {/* Tournament Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Blox Fruits
                  </span>
                  <span className="text-sm text-gray-500">Em breve</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Blox Fruits PvP Masters
                </h3>
                <p className="text-gray-600 mb-4">
                  Competição de PvP com os frutos mais poderosos
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    64/128 jogadores
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    R$ 3.000
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>

            {/* Tournament Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Adopt Me
                  </span>
                  <span className="text-sm text-gray-500">Registros abertos</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Adopt Me Pet Show
                </h3>
                <p className="text-gray-600 mb-4">
                  Mostre seus pets mais raros e ganhe prêmios incríveis
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    32/64 jogadores
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    R$ 2.000
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/tournaments" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
            >
              Ver Todos os Campeonatos
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simples e fácil de participar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Escolha um Campeonato</h3>
              <p className="text-gray-600">
                Navegue pelos campeonatos disponíveis e escolha o que mais te interessa
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inscreva-se</h3>
              <p className="text-gray-600">
                Faça sua inscrição e aguarde o início do campeonato
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compete e Ganhe</h3>
              <p className="text-gray-600">
                Jogue suas partidas, suba no ranking e ganhe prêmios incríveis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Junte-se à comunidade de jogadores mais competitiva do Roblox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tournaments" 
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              <Trophy className="h-5 w-5 inline mr-2" />
              Participar Agora
            </Link>
            <Link 
              href="/ranking" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              <TrendingUp className="h-5 w-5 inline mr-2" />
              Ver Ranking
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}