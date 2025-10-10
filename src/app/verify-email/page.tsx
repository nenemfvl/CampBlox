'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, XCircle, Mail, Loader2 } from 'lucide-react'

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState<any>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token')
      
      if (!token) {
        setStatus('error')
        setMessage('Token de verificação não encontrado')
        return
      }

      try {
        const response = await fetch(`https://campblox-production.up.railway.app/api/verify-email?token=${token}`)
        const data = await response.json()

        if (data.success) {
          setStatus('success')
          setMessage(data.message)
          setUserData(data.data)
        } else {
          setStatus('error')
          setMessage(data.message)
        }
      } catch (error) {
        setStatus('error')
        setMessage('Erro ao verificar email. Tente novamente.')
      }
    }

    verifyEmail()
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className={`p-3 rounded-full ${status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600' : 'bg-purple-600'}`}>
              {status === 'loading' && <Loader2 className="h-8 w-8 text-white animate-spin" />}
              {status === 'success' && <CheckCircle className="h-8 w-8 text-white" />}
              {status === 'error' && <XCircle className="h-8 w-8 text-white" />}
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            {status === 'loading' && 'Verificando Email...'}
            {status === 'success' && 'Email Verificado!'}
            {status === 'error' && 'Erro na Verificação'}
          </h2>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl">
          {status === 'loading' && (
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Aguarde enquanto verificamos seu email...
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center">
              <div className="mb-6">
                <Mail className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <p className="text-green-400 text-lg font-medium mb-2">
                  {message}
                </p>
                {userData && (
                  <p className="text-gray-300">
                    Bem-vindo, <strong>{userData.username}</strong>!
                  </p>
                )}
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/login"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors inline-block"
                >
                  Fazer Login
                </Link>
                <Link
                  href="/"
                  className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors inline-block"
                >
                  Ir para o Início
                </Link>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <div className="mb-6">
                <XCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
                <p className="text-red-400 text-lg font-medium mb-2">
                  {message}
                </p>
                <p className="text-gray-300 text-sm">
                  O token pode ter expirado ou ser inválido.
                </p>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/register"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors inline-block"
                >
                  Criar Nova Conta
                </Link>
                <Link
                  href="/"
                  className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors inline-block"
                >
                  Ir para o Início
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
