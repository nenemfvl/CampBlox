'use client'

import { useEffect, useState } from 'react'

export default function DebugPage() {
  const [apiUrl, setApiUrl] = useState<string>('')
  const [testResult, setTestResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setApiUrl(process.env.NEXT_PUBLIC_API_URL || 'https://campblox-production.up.railway.app/api')
  }, [])

  const testApi = async () => {
    try {
      setError(null)
      const response = await fetch(`${apiUrl}/tournaments`)
      const data = await response.json()
      setTestResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Debug API</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Configuração</h2>
          <p className="text-gray-300 mb-2">
            <strong>API URL:</strong> {apiUrl}
          </p>
          <p className="text-gray-300 mb-2">
            <strong>NEXT_PUBLIC_API_URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'Não definida'}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Teste da API</h2>
          <button 
            onClick={testApi}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors mb-4"
          >
            Testar API
          </button>
          
          {error && (
            <div className="bg-red-900 text-red-200 p-4 rounded-lg mb-4">
              <strong>Erro:</strong> {error}
            </div>
          )}
          
          {testResult && (
            <div className="bg-green-900 text-green-200 p-4 rounded-lg">
              <strong>Sucesso:</strong>
              <pre className="mt-2 text-sm overflow-auto">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
