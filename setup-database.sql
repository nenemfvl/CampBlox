-- =====================================================
-- CAMPBLOX DATABASE SETUP
-- Execute este script no Railway PostgreSQL
-- =====================================================

-- Criar tabela de jogos
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de usuários
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

-- Criar tabela de campeonatos
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

-- Criar tabela de participantes
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

-- Criar tabela de partidas
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

-- =====================================================
-- DADOS DE EXEMPLO
-- =====================================================

-- Inserir jogos
INSERT INTO games (name, description, category, image_url) VALUES
('Arsenal', 'FPS competitivo com armas únicas e mecânicas inovadoras', 'FPS', '/images/arsenal.jpg'),
('Blox Fruits', 'RPG de aventura com frutos do diabo e combate épico', 'RPG', '/images/blox-fruits.jpg'),
('Adopt Me', 'Simulação de adoção de pets com coleção e customização', 'Simulação', '/images/adopt-me.jpg'),
('Jailbreak', 'Simulação de crime e polícia com perseguições épicas', 'Simulação', '/images/jailbreak.jpg'),
('Brookhaven', 'Roleplay livre com casas, carros e interações sociais', 'Roleplay', '/images/brookhaven.jpg'),
('Tower Defense', 'Estratégia com torres e ondas de inimigos desafiadoras', 'Estratégia', '/images/tower-defense.jpg'),
('Pet Simulator', 'Simulação de pets com evolução e coleção infinita', 'Simulação', '/images/pet-simulator.jpg'),
('Royale High', 'RPG de fantasia com escola mágica e customização', 'RPG', '/images/royale-high.jpg')
ON CONFLICT DO NOTHING;

-- Inserir usuários de exemplo
INSERT INTO users (username, email, password_hash, points, wins, games_played) VALUES
('Admin', 'admin@campblox.com', '$2b$10$hashedpassword', 2847, 156, 178),
('ProGamer2025', 'progamer@teste.com', '$2b$10$hashedpassword', 2634, 142, 165),
('SkillMaster', 'skill@teste.com', '$2b$10$hashedpassword', 2421, 128, 152),
('AceGamer', 'ace@teste.com', '$2b$10$hashedpassword', 2198, 115, 138),
('NinjaWarrior', 'ninja@teste.com', '$2b$10$hashedpassword', 2056, 108, 132)
ON CONFLICT DO NOTHING;

-- Inserir campeonatos
INSERT INTO tournaments (game_id, name, description, max_participants, current_participants, prize_pool, start_date, status, format) VALUES
(1, 'Arsenal Championship 2025', 'Torneio de eliminação com os melhores jogadores de Arsenal. Competição acirrada com prêmios incríveis.', 256, 128, 5000.00, '2025-01-15 20:00:00', 'live', 'Single Elimination'),
(2, 'Blox Fruits PvP Masters', 'Competição de PvP com os frutos mais poderosos. Mostre sua habilidade em combate.', 128, 64, 3000.00, '2025-01-20 19:00:00', 'upcoming', 'Round Robin'),
(3, 'Adopt Me Pet Show', 'Mostre seus pets mais raros e ganhe prêmios incríveis. Competição de beleza e raridade.', 64, 32, 2000.00, '2025-01-25 18:00:00', 'registration', 'Judged Evaluation'),
(4, 'Jailbreak Heist Masters', 'Competição de roubos e fugas. Mostre suas habilidades como criminoso ou policial.', 96, 96, 4500.00, '2025-01-10 20:00:00', 'completed', 'Team of 4'),
(5, 'Tower Defense Champions', 'Estratégia e planejamento são fundamentais nesta competição de tower defense.', 80, 48, 3500.00, '2025-01-30 17:00:00', 'upcoming', 'Individual'),
(6, 'Brookhaven Roleplay Contest', 'Competição de roleplay criativo. Mostre sua criatividade e habilidades de interpretação.', 32, 16, 1500.00, '2025-02-05 16:00:00', 'registration', 'Creative Evaluation')
ON CONFLICT DO NOTHING;

-- Inserir participantes de exemplo
INSERT INTO participants (tournament_id, user_id, status, position, points) VALUES
(1, 1, 'active', 1, 2847),
(1, 2, 'active', 2, 2634),
(1, 3, 'active', 3, 2421),
(2, 2, 'registered', NULL, 0),
(2, 3, 'registered', NULL, 0),
(2, 4, 'registered', NULL, 0),
(3, 4, 'registered', NULL, 0),
(3, 5, 'registered', NULL, 0)
ON CONFLICT DO NOTHING;

-- =====================================================
-- ÍNDICES PARA PERFORMANCE
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_tournaments_game_id ON tournaments(game_id);
CREATE INDEX IF NOT EXISTS idx_tournaments_status ON tournaments(status);
CREATE INDEX IF NOT EXISTS idx_participants_tournament_id ON participants(tournament_id);
CREATE INDEX IF NOT EXISTS idx_participants_user_id ON participants(user_id);
CREATE INDEX IF NOT EXISTS idx_matches_tournament_id ON matches(tournament_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- =====================================================
-- VERIFICAÇÃO
-- =====================================================

-- Verificar se as tabelas foram criadas
SELECT 
    table_name,
    table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Verificar dados inseridos
SELECT 'Games' as table_name, COUNT(*) as count FROM games
UNION ALL
SELECT 'Users', COUNT(*) FROM users
UNION ALL
SELECT 'Tournaments', COUNT(*) FROM tournaments
UNION ALL
SELECT 'Participants', COUNT(*) FROM participants;
