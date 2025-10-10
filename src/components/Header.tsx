'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Trophy, User, LogIn, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Safe theme access
  let theme: 'light' | 'dark' = 'light'
  let toggleTheme: () => void = () => {}
  
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    // ThemeProvider not available during SSR
    console.warn('ThemeProvider not available during SSR')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

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
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
          : 'bg-black shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">
              CampBlox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-purple-200 transition-colors"
            >
              Início
            </Link>
            <Link 
              href="/tournaments" 
              className="text-white hover:text-purple-200 transition-colors"
            >
              Campeonatos
            </Link>
            <Link 
              href="/games" 
              className="text-white hover:text-purple-200 transition-colors"
            >
              Jogos
            </Link>
            <Link 
              href="/ranking" 
              className="text-white hover:text-purple-200 transition-colors"
            >
              Ranking
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-colors text-white hover:bg-white/20"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            )}
            
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
            className="md:hidden text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-purple-200 transition-colors"
              >
                Início
              </Link>
              <Link 
                href="/tournaments" 
                className="text-white hover:text-purple-200 transition-colors"
              >
                Campeonatos
              </Link>
              <Link 
                href="/games" 
                className="text-white hover:text-purple-200 transition-colors"
              >
                Jogos
              </Link>
              <Link 
                href="/ranking" 
                className="text-white hover:text-purple-200 transition-colors"
              >
                Ranking
              </Link>
              <div className="pt-4 border-t border-purple-400">
                {/* Theme Toggle Mobile */}
                {mounted && (
                  <button 
                    onClick={toggleTheme}
                    className="w-full text-left text-white hover:text-purple-200 transition-colors mb-2"
                  >
                    {theme === 'light' ? <Moon className="h-4 w-4 inline mr-2" /> : <Sun className="h-4 w-4 inline mr-2" />}
                    {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
                  </button>
                )}
                
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
