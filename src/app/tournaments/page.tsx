'use client'

import Link from 'next/link'
import { Trophy, Users, Calendar, Clock, Play, Filter, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { apiService, Tournament } from '@/lib/api'

export default function TournamentsPage() {
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        setLoading(true)
        const data = await apiService.getTournaments()
        setTournaments(data)
      } catch (err) {
        setError('Erro ao carregar campeonatos')
        console.error('Error fetching tournaments:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTournaments()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'upcoming': return 'bg-orange-500'
      case 'completed': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ao vivo'
      case 'upcoming': return 'Em breve'
      case 'completed': return 'Finalizado'
      default: return 'Em breve'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatCurrency = (value: string) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(parseFloat(value))
  }
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
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 text-lg">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <Trophy className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tournament.game_name || 'Jogo'}
                      </span>
                      <span className={`${getStatusColor(tournament.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {getStatusText(tournament.status)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {tournament.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {tournament.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        {tournament.current_participants}/{tournament.max_participants} jogadores inscritos
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        Início: {formatDate(tournament.start_date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        Fim: {formatDate(tournament.end_date)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-green-400">
                        {formatCurrency(tournament.prize_pool)}
                      </div>
                      <div className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {tournament.format}
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      <Play className="h-4 w-4 inline mr-2" />
                      {tournament.status === 'active' ? 'Participar' : 'Inscrever-se'}
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