'use client'

import Link from 'next/link'
import { Gamepad2, Users, Trophy, Star, Play, Search, Filter } from 'lucide-react'
import { useEffect, useState } from 'react'
import { apiService, Game } from '@/lib/api'

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        const data = await apiService.getGames()
        setGames(data)
      } catch (err) {
        setError('Erro ao carregar jogos')
        console.error('Error fetching games:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])
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
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 text-lg">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <div key={game.id} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <Gamepad2 className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                    <p className="text-gray-300 mb-4">
                      {game.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        {game.category}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Trophy className="h-4 w-4 mr-2" />
                        Campeonatos disponíveis
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="h-4 w-4 mr-2" />
                        Jogo popular
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      <Play className="h-4 w-4 inline mr-2" />
                      Ver Campeonatos
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
