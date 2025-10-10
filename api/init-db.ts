import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function createTables() {
  try {
    console.log('🗄️ Criando tabelas do banco de dados...');

    // Tabela de jogos
    await pool.query(`
      CREATE TABLE IF NOT EXISTS games (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        description TEXT,
        image_url VARCHAR(255),
        roblox_game_id VARCHAR(50),
        category VARCHAR(50),
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tabela de usuários
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        roblox_username VARCHAR(50),
        avatar_url VARCHAR(255),
        level INTEGER DEFAULT 1,
        total_points INTEGER DEFAULT 0,
        last_online TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tabela de campeonatos
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tournaments (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        game_id INTEGER REFERENCES games(id),
        max_participants INTEGER NOT NULL,
        entry_fee DECIMAL(10,2) DEFAULT 0,
        prize_pool DECIMAL(10,2) NOT NULL,
        start_date TIMESTAMP NOT NULL,
        end_date TIMESTAMP NOT NULL,
        status VARCHAR(20) DEFAULT 'open',
        format VARCHAR(50) DEFAULT 'single_elimination',
        rules TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tabela de participantes
    await pool.query(`
      CREATE TABLE IF NOT EXISTS participants (
        id SERIAL PRIMARY KEY,
        tournament_id INTEGER REFERENCES tournaments(id),
        user_id INTEGER REFERENCES users(id),
        position INTEGER,
        points INTEGER DEFAULT 0,
        prize_won DECIMAL(10,2) DEFAULT 0,
        status VARCHAR(20) DEFAULT 'registered',
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tabela de partidas
    await pool.query(`
      CREATE TABLE IF NOT EXISTS matches (
        id SERIAL PRIMARY KEY,
        tournament_id INTEGER REFERENCES tournaments(id),
        round INTEGER NOT NULL,
        player1_id INTEGER REFERENCES users(id),
        player2_id INTEGER REFERENCES users(id),
        winner_id INTEGER REFERENCES users(id),
        status VARCHAR(20) DEFAULT 'pending',
        scheduled_at TIMESTAMP,
        played_at TIMESTAMP,
        result_data JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✅ Tabelas criadas com sucesso!');

    // Inserir dados iniciais
    await insertInitialData();

  } catch (error) {
    console.error('❌ Erro ao criar tabelas:', error);
  } finally {
    await pool.end();
  }
}

async function insertInitialData() {
  try {
    console.log('📊 Inserindo dados iniciais...');

    // Inserir jogos
    const games = [
      {
        name: 'Arsenal',
        description: 'Um jogo de tiro em primeira pessoa onde você compete contra outros jogadores em rounds de eliminação.',
        image_url: '/games/arsenal.jpg',
        roblox_game_id: '286090429',
        category: 'FPS'
      },
      {
        name: 'Blox Fruits',
        description: 'Um RPG de aventura baseado em One Piece onde você pode comer frutos do diabo e lutar contra outros jogadores.',
        image_url: '/games/blox-fruits.jpg',
        roblox_game_id: '2753915549',
        category: 'RPG'
      },
      {
        name: 'Adopt Me',
        description: 'Um jogo de simulação onde você pode adotar pets, decorar sua casa e participar de eventos especiais.',
        image_url: '/games/adopt-me.jpg',
        roblox_game_id: '920587237',
        category: 'Simulation'
      },
      {
        name: 'Jailbreak',
        description: 'Um jogo de ação onde você pode ser um criminoso ou policial. Roube bancos e escape da prisão.',
        image_url: '/games/jailbreak.jpg',
        roblox_game_id: '606849621',
        category: 'Action'
      },
      {
        name: 'Tower Defense',
        description: 'Estratégia em tempo real onde você constrói torres para defender sua base contra ondas de inimigos.',
        image_url: '/games/tower-defense.jpg',
        roblox_game_id: '3260590327',
        category: 'Strategy'
      },
      {
        name: 'Brookhaven',
        description: 'Um jogo de roleplay onde você pode viver uma vida virtual, trabalhar e comprar casas.',
        image_url: '/games/brookhaven.jpg',
        roblox_game_id: '4924922222',
        category: 'Roleplay'
      }
    ];

    for (const game of games) {
      await pool.query(`
        INSERT INTO games (name, description, image_url, roblox_game_id, category)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (name) DO NOTHING
      `, [game.name, game.description, game.image_url, game.roblox_game_id, game.category]);
    }

    // Inserir usuários de exemplo
    const users = [
      {
        username: 'ProGamer2025',
        email: 'progamer@example.com',
        password: 'hashed_password_here',
        roblox_username: 'ProGamer2025',
        level: 50,
        total_points: 2847
      },
      {
        username: 'SkillMaster',
        email: 'skillmaster@example.com',
        password: 'hashed_password_here',
        roblox_username: 'SkillMaster',
        level: 48,
        total_points: 2634
      },
      {
        username: 'ElitePlayer',
        email: 'eliteplayer@example.com',
        password: 'hashed_password_here',
        roblox_username: 'ElitePlayer',
        level: 46,
        total_points: 2421
      }
    ];

    for (const user of users) {
      await pool.query(`
        INSERT INTO users (username, email, password, roblox_username, level, total_points)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (username) DO NOTHING
      `, [user.username, user.email, user.password, user.roblox_username, user.level, user.total_points]);
    }

    // Inserir campeonatos de exemplo
    const tournaments = [
      {
        title: 'Arsenal Championship 2025',
        description: 'Torneio de eliminação com os melhores jogadores de Arsenal. Competição acirrada com prêmios incríveis.',
        game_id: 1,
        max_participants: 256,
        entry_fee: 0,
        prize_pool: 5000,
        start_date: new Date('2025-01-15T20:00:00Z'),
        end_date: new Date('2025-01-15T23:00:00Z'),
        status: 'live',
        format: 'single_elimination'
      },
      {
        title: 'Blox Fruits PvP Masters',
        description: 'Competição de PvP com os frutos mais poderosos. Mostre sua habilidade em combate.',
        game_id: 2,
        max_participants: 128,
        entry_fee: 0,
        prize_pool: 3000,
        start_date: new Date('2025-01-20T19:00:00Z'),
        end_date: new Date('2025-01-20T23:00:00Z'),
        status: 'upcoming',
        format: 'round_robin'
      },
      {
        title: 'Adopt Me Pet Show',
        description: 'Mostre seus pets mais raros e ganhe prêmios incríveis. Competição de beleza e raridade.',
        game_id: 3,
        max_participants: 64,
        entry_fee: 0,
        prize_pool: 2000,
        start_date: new Date('2025-01-25T18:00:00Z'),
        end_date: new Date('2025-01-25T20:00:00Z'),
        status: 'open',
        format: 'judging'
      }
    ];

    for (const tournament of tournaments) {
      await pool.query(`
        INSERT INTO tournaments (title, description, game_id, max_participants, entry_fee, prize_pool, start_date, end_date, status, format)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `, [
        tournament.title, tournament.description, tournament.game_id,
        tournament.max_participants, tournament.entry_fee, tournament.prize_pool,
        tournament.start_date, tournament.end_date, tournament.status, tournament.format
      ]);
    }

    console.log('✅ Dados iniciais inseridos com sucesso!');

  } catch (error) {
    console.error('❌ Erro ao inserir dados iniciais:', error);
  }
}

// Executar criação das tabelas
createTables();
