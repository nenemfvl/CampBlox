#!/bin/bash

echo "🗄️ Inicializando banco de dados PostgreSQL..."

# Verificar se DATABASE_URL está definida
if [ -z "$DATABASE_URL" ]; then
    echo "❌ Erro: DATABASE_URL não está definida"
    echo "💡 Configure a variável DATABASE_URL no Railway"
    exit 1
fi

echo "✅ DATABASE_URL encontrada"

# Executar script de inicialização
echo "📊 Criando tabelas e inserindo dados iniciais..."
npm run api:init-db

if [ $? -eq 0 ]; then
    echo "🎉 Banco de dados inicializado com sucesso!"
    echo "📋 Tabelas criadas:"
    echo "   - games (jogos)"
    echo "   - users (usuários)"
    echo "   - tournaments (campeonatos)"
    echo "   - participants (participantes)"
    echo "   - matches (partidas)"
    echo ""
    echo "🎮 Dados iniciais inseridos:"
    echo "   - 6 jogos (Arsenal, Blox Fruits, etc.)"
    echo "   - 3 usuários de exemplo"
    echo "   - 3 campeonatos de exemplo"
else
    echo "❌ Erro ao inicializar banco de dados"
    exit 1
fi
