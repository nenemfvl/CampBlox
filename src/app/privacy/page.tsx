export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>
        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Como protegemos seus dados</h2>
          <p className="text-gray-300 mb-6">
            Última atualização: 10 de outubro de 2025
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Informações que coletamos</h3>
              <p className="text-gray-300">
                Coletamos apenas as informações necessárias para fornecer nossos serviços: nome de usuário, email e dados de jogo.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Como usamos suas informações</h3>
              <p className="text-gray-300">
                Utilizamos suas informações para criar sua conta, gerenciar campeonatos e melhorar nossos serviços.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Compartilhamento de dados</h3>
              <p className="text-gray-300">
                Não vendemos ou compartilhamos suas informações pessoais com terceiros sem seu consentimento.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">4. Segurança</h3>
              <p className="text-gray-300">
                Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">5. Seus direitos</h3>
              <p className="text-gray-300">
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
