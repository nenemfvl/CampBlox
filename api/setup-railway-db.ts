import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// URL de conexão do Railway
const DATABASE_URL = 'postgresql://postgres:LoDhMopvhUvKQjVcYJTmrIymNRKWWfGQ@caboose.proxy.rlwy.net:18824/railway';

const pool = new Pool({
  connectionString: DATABASE_URL,
});

async function createTables() {
  const client = await pool.connect();
  
  try {
    console.log('🔌 Conectando ao PostgreSQL...');
    
    // Criar tabela de jogos
    await client.query(`
      CREATE TABLE IF NOT EXISTS games (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        category VARCHAR(50),
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "games" criada');

    // Criar tabela de usuários
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        avatar_url VARCHAR(255),
        points INTEGER DEFAULT 0,
        wins INTEGER DEFAULT 0,
        games_played INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "users" criada');

    // Criar tabela de campeonatos
    await client.query(`
      CREATE TABLE IF NOT EXISTS tournaments (
        id SERIAL PRIMARY KEY,
        game_id INTEGER REFERENCES games(id),
        name VARCHAR(100) NOT NULL,
        description TEXT,
        max_participants INTEGER NOT NULL,
        current_participants INTEGER DEFAULT 0,
        prize_pool DECIMAL(10,2) DEFAULT 0,
        entry_fee DECIMAL(10,2) DEFAULT 0,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        status VARCHAR(20) DEFAULT 'upcoming',
        format VARCHAR(50),
        rules TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "tournaments" criada');

    // Criar tabela de participantes
    await client.query(`
      CREATE TABLE IF NOT EXISTS participants (
        id SERIAL PRIMARY KEY,
        tournament_id INTEGER REFERENCES tournaments(id),
        user_id INTEGER REFERENCES users(id),
        team_name VARCHAR(100),
        status VARCHAR(20) DEFAULT 'registered',
        position INTEGER,
        points INTEGER DEFAULT 0,
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(tournament_id, user_id)
      );
    `);
    console.log('✅ Tabela "participants" criada');

    // Criar tabela de partidas
    await client.query(`
      CREATE TABLE IF NOT EXISTS matches (
        id SERIAL PRIMARY KEY,
        tournament_id INTEGER REFERENCES tournaments(id),
        round_number INTEGER NOT NULL,
        player1_id INTEGER REFERENCES users(id),
        player2_id INTEGER REFERENCES users(id),
        winner_id INTEGER REFERENCES users(id),
        score1 INTEGER DEFAULT 0,
        score2 INTEGER DEFAULT 0,
        status VARCHAR(20) DEFAULT 'scheduled',
        match_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "matches" criada');

    // Inserir dados de exemplo
    await client.query(`
      INSERT INTO games (name, description, category, image_url) VALUES
      ('Arsenal', 'FPS competitivo com armas únicas', 'FPS', '/images/arsenal.jpg'),
      ('Blox Fruits', 'RPG de aventura com frutos do diabo', 'RPG', '/images/blox-fruits.jpg'),
      ('Adopt Me', 'Simulação de adoção de pets', 'Simulação', '/images/adopt-me.jpg'),
      ('Jailbreak', 'Simulação de crime e polícia', 'Simulação', '/images/jailbreak.jpg'),
      ('Brookhaven', 'Roleplay livre com casas e carros', 'Roleplay', '/images/brookhaven.jpg')
      ON CONFLICT DO NOTHING;
    `);
    console.log('✅ Dados de exemplo inseridos em "games"');

    await client.query(`
      INSERT INTO tournaments (game_id, name, description, max_participants, current_participants, prize_pool, start_date, status, format) VALUES
      (1, 'Arsenal Championship 2025', 'Torneio de eliminação com os melhores jogadores', 256, 128, 5000.00, '2025-01-15 20:00:00', 'live', 'Single Elimination'),
      (2, 'Blox Fruits PvP Masters', 'Competição de PvP com frutos poderosos', 128, 64, 3000.00, '2025-01-20 19:00:00', 'upcoming', 'Round Robin'),
      (3, 'Adopt Me Pet Show', 'Mostre seus pets mais raros', 64, 32, 2000.00, '2025-01-25 18:00:00', 'registration', 'Judged Evaluation')
      ON CONFLICT DO NOTHING;
    `);
    console.log('✅ Dados de exemplo inseridos em "tournaments"');

    console.log('🎉 Banco de dados configurado com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro:', error instanceof Error ? error.message : 'Erro desconhecido');
  } finally {
    client.release();
    await pool.end();
  }
}

createTables();
