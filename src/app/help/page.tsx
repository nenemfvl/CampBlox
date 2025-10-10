export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Central de Ajuda</h1>
        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Como usar o CampBlox</h2>
          <p className="text-gray-300 mb-6">
            Aqui você encontrará todas as informações necessárias para usar nossa plataforma.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Como participar de campeonatos?</h3>
              <p className="text-gray-300">
                1. Navegue até a página de Campeonatos<br/>
                2. Escolha um campeonato que lhe interesse<br/>
                3. Clique em &quot;Inscrever-se&quot;<br/>
                4. Aguarde a confirmação
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Como criar uma conta?</h3>
              <p className="text-gray-300">
                Clique em &quot;Entrar&quot; no canto superior direito e siga as instruções.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Precisa de mais ajuda?</h3>
              <p className="text-gray-300">
                Entre em contato conosco através da página de contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
