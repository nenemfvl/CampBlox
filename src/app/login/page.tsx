'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Trophy, LogIn } from 'lucide-react'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">N</span>
            </div>
            <span className="text-3xl font-bold text-white">INFINITY</span>
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Entre na sua conta
          </h2>
          <p className="mt-2 text-gray-400">
            Bem-vindo de volta à Infinity Guild
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-700 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-700 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-700 rounded bg-gray-800 text-cyan-600 focus:ring-cyan-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                Esqueceu a senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Entrar
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Não tem uma conta?{' '}
              <Link href="/register" className="font-medium text-cyan-400 hover:text-cyan-300">
                Criar conta
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
