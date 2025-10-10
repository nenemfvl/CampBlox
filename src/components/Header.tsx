'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Trophy, User, LogIn, Sun, Moon, LogOut, Settings } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  
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

  // Safe auth access
  let user = null
  let logout: () => void = () => {}
  
  try {
    const authContext = useAuth()
    user = authContext.user
    logout = authContext.logout
  } catch (error) {
    // AuthProvider not available during SSR
    console.warn('AuthProvider not available during SSR')
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
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
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
            
            {user ? (
              /* User Menu */
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors"
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{user.username}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-1 z-50">
                    <Link 
                      href="/profile" 
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Perfil
                    </Link>
                    <Link 
                      href="/settings" 
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Configurações
                    </Link>
                    <hr className="my-1 border-gray-700" />
                    <button 
                      onClick={() => {
                        logout()
                        setShowUserMenu(false)
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Login Button */
              <Link 
                href="/login"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                <LogIn className="h-4 w-4 inline mr-2" />
                Entrar
              </Link>
            )}
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
                
                {user ? (
                  /* User Menu Mobile */
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-white">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{user.username}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                    </div>
                    <Link 
                      href="/profile" 
                      className="w-full text-left text-white hover:text-purple-200 transition-colors mb-2 block"
                    >
                      <User className="h-4 w-4 inline mr-2" />
                      Perfil
                    </Link>
                    <Link 
                      href="/settings" 
                      className="w-full text-left text-white hover:text-purple-200 transition-colors mb-2 block"
                    >
                      <Settings className="h-4 w-4 inline mr-2" />
                      Configurações
                    </Link>
                    <button 
                      onClick={logout}
                      className="w-full text-left text-red-400 hover:text-red-300 transition-colors mb-2"
                    >
                      <LogOut className="h-4 w-4 inline mr-2" />
                      Sair
                    </button>
                  </>
                ) : (
                  /* Login Button Mobile */
                  <Link 
                    href="/login"
                    className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors inline-block text-center"
                  >
                    <LogIn className="h-4 w-4 inline mr-2" />
                    Entrar
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
