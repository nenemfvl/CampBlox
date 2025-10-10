import Link from 'next/link'
import { Trophy, Users, Calendar, Star, Play, Award, TrendingUp, Plus, Clock, Eye } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              ROBOX
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <Plus className="h-5 w-5 inline mr-2" />
              ADICIONAR JOGO
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-8 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Find Your Team Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">ENCONTRE SEU TIME</h2>
                <p className="text-blue-100 mb-6">
                  Conecte-se com jogadores e forme equipes para dominar os campeonatos do Roblox
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  <Users className="h-5 w-5 inline mr-2" />
                  BUSCAR TIME
                </button>
              </div>
              <div className="absolute top-4 right-4 opacity-20">
                <Trophy className="h-32 w-32" />
              </div>
            </div>

            {/* Academy Card */}
            <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">ROBOX ACADEMY</h2>
                <p className="text-green-100 mb-6">
                  Aprenda estratégias, técnicas e melhore suas habilidades com os melhores jogadores
                </p>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                  <Award className="h-5 w-5 inline mr-2" />
                  ACESSAR ACADEMY
                </button>
              </div>
              <div className="absolute top-4 right-4 opacity-20">
                <Star className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Novidades.</h2>
          
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Novo campeonato Arsenal Championship 2025 anunciado
                </h3>
                <p className="text-gray-300 mb-3">
                  O maior torneio de Arsenal do ano está chegando! Com premiação de R$ 5.000 e 
                  256 vagas disponíveis. Inscrições abertas até 10 de janeiro.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>Por Admin CampBlox</span>
                  <span className="mx-2">•</span>
                  <span>10 de outubro de 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Sistema de times implementado com sucesso
                </h3>
                <p className="text-gray-300 mb-3">
                  Agora você pode formar equipes e participar de campeonatos em grupo. 
                  Conecte-se com outros jogadores e domine os torneios juntos.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>Por Admin CampBlox</span>
                  <span className="mx-2">•</span>
                  <span>8 de outubro de 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Clips Section */}
      <section className="py-8 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">OS MELHORES CLIPS DA COMUNIDADE</h2>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              EM BREVE
            </span>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-32 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Clips da comunidade em breve</p>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                ADICIONAR CLIP
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}