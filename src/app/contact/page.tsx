export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Contato</h1>
        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Entre em contato conosco</h2>
          <p className="text-gray-300 mb-6">
            Tem alguma dúvida, sugestão ou problema? Estamos aqui para ajudar!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong>Email:</strong> contato@campblox.com
                </p>
                <p className="text-gray-300">
                  <strong>Discord:</strong> CampBlox#1234
                </p>
                <p className="text-gray-300">
                  <strong>Suporte:</strong> 24/7
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Formulário de Contato</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
                <textarea 
                  placeholder="Sua mensagem" 
                  rows={4}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
