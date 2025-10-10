'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Trophy, User, LogIn } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">CampBlox</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-200 transition-colors">
              Início
            </Link>
            <Link href="/tournaments" className="text-white hover:text-purple-200 transition-colors">
              Campeonatos
            </Link>
            <Link href="/games" className="text-white hover:text-purple-200 transition-colors">
              Jogos
            </Link>
            <Link href="/ranking" className="text-white hover:text-purple-200 transition-colors">
              Ranking
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-purple-200 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              <LogIn className="h-4 w-4 inline mr-2" />
              Entrar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-purple-200 transition-colors">
                Início
              </Link>
              <Link href="/tournaments" className="text-white hover:text-purple-200 transition-colors">
                Campeonatos
              </Link>
              <Link href="/games" className="text-white hover:text-purple-200 transition-colors">
                Jogos
              </Link>
              <Link href="/ranking" className="text-white hover:text-purple-200 transition-colors">
                Ranking
              </Link>
              <div className="pt-4 border-t border-purple-400">
                <button className="w-full text-left text-white hover:text-purple-200 transition-colors mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Perfil
                </button>
                <button className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                  <LogIn className="h-4 w-4 inline mr-2" />
                  Entrar
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
