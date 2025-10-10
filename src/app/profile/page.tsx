'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { User, Mail, Trophy, Calendar, Settings, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link 
              href="/"
              className="flex items-center text-white hover:text-purple-200 transition-colors mr-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{user.username}</h1>
              <p className="text-purple-200 text-lg">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Informações do Perfil</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Nome de usuário</p>
                    <p className="text-white font-medium">{user.username}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Membro desde</p>
                    <p className="text-white font-medium">Janeiro 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Estatísticas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-gray-400">Campeonatos</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white">8</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">8</div>
                  <div className="text-gray-400">Vitórias</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white">R$</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">2,500</div>
                  <div className="text-gray-400">Prêmios</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Ações Rápidas</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/tournaments"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors block text-center"
                >
                  Ver Campeonatos
                </Link>
                
                <Link 
                  href="/ranking"
                  className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors block text-center"
                >
                  Ver Ranking
                </Link>
                
                <Link 
                  href="/settings"
                  className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors block text-center"
                >
                  <Settings className="h-4 w-4 inline mr-2" />
                  Configurações
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Atividade Recente</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm">Participou do Arsenal Championship</p>
                    <p className="text-gray-400 text-xs">2 horas atrás</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm">Ganhou R$ 500 no Blox Fruits</p>
                    <p className="text-gray-400 text-xs">1 dia atrás</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm">Subiu 3 posições no ranking</p>
                    <p className="text-gray-400 text-xs">3 dias atrás</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
