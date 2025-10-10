export default function ReportPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Reportar</h1>
        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Reportar Problema</h2>
          <p className="text-gray-300 mb-6">
            Ajude-nos a manter a comunidade segura reportando comportamentos inadequados.
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Tipo de Reporte</label>
              <select className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none">
                <option>Comportamento inadequado</option>
                <option>Trapaça/Hack</option>
                <option>Spam</option>
                <option>Conteúdo inadequado</option>
                <option>Outro</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Usuário Reportado</label>
              <input 
                type="text" 
                placeholder="Nome do usuário" 
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Descrição do Problema</label>
              <textarea 
                placeholder="Descreva o que aconteceu..." 
                rows={6}
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Evidências (opcional)</label>
              <input 
                type="file" 
                accept="image/*,video/*"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Enviar Reporte
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
