export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Regras</h1>
        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Regras da Infinity Guild</h2>
          <p className="text-gray-300 mb-6">
            Para manter um ambiente saudável e justo para todos os jogadores.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Respeito</h3>
              <p className="text-gray-300">
                Trate todos os jogadores com respeito e educação. Não toleramos bullying, assédio ou comportamento tóxico.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Fair Play</h3>
              <p className="text-gray-300">
                Jogue de forma justa. Não use cheats, hacks ou qualquer forma de trapaça nos campeonatos.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Pontualidade</h3>
              <p className="text-gray-300">
                Seja pontual nos campeonatos. Atrasos podem resultar em desclassificação.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">4. Conteúdo</h3>
              <p className="text-gray-300">
                Não compartilhe conteúdo inadequado, spam ou links maliciosos.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">5. Penalidades</h3>
              <p className="text-gray-300">
                Violações das regras podem resultar em advertências, suspensões temporárias ou banimento permanente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
