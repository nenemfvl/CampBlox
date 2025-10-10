'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Trophy, User, LogIn } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className={`h-8 w-8 transition-colors ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              CampBlox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Início
            </Link>
            <Link 
              href="/tournaments" 
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Campeonatos
            </Link>
            <Link 
              href="/games" 
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Jogos
            </Link>
            <Link 
              href="/ranking" 
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Ranking
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:text-purple-600' 
                : 'text-white hover:text-purple-200'
            }`}>
              <User className="h-5 w-5" />
            </button>
            <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isScrolled 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-white text-purple-600 hover:bg-purple-50'
            }`}>
              <LogIn className="h-4 w-4 inline mr-2" />
              Entrar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 transition-colors ${
            isScrolled ? 'bg-white/95 backdrop-blur-md' : ''
          }`}>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                Início
              </Link>
              <Link 
                href="/tournaments" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                Campeonatos
              </Link>
              <Link 
                href="/games" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                Jogos
              </Link>
              <Link 
                href="/ranking" 
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                Ranking
              </Link>
              <div className={`pt-4 border-t ${
                isScrolled ? 'border-gray-200' : 'border-purple-400'
              }`}>
                <button className={`w-full text-left transition-colors mb-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}>
                  <User className="h-4 w-4 inline mr-2" />
                  Perfil
                </button>
                <button className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-white text-purple-600 hover:bg-purple-50'
                }`}>
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
