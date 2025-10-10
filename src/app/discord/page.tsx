export default function DiscordPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Discord</h1>
        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Junte-se à nossa comunidade!</h2>
          <p className="text-gray-300 mb-6">
            Conecte-se com outros jogadores, participe de discussões e fique por dentro das novidades.
          </p>
          
          <div className="text-center">
            <div className="bg-purple-600 p-8 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">CampBlox Discord</h3>
              <p className="text-purple-100 mb-6">
                Mais de 10.000 membros ativos
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Entrar no Discord
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">🎮 Discussões</h4>
                <p className="text-gray-300">Converse sobre seus jogos favoritos</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">🏆 Torneios</h4>
                <p className="text-gray-300">Participe de eventos exclusivos</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">💬 Suporte</h4>
                <p className="text-gray-300">Receba ajuda da comunidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
