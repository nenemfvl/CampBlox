import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Testar conexão com banco
pool.on('connect', () => {
  console.log('✅ Conectado ao banco PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ Erro na conexão com banco:', err);
});

// Rotas da API

// GET /api/tournaments - Listar todos os campeonatos
app.get('/api/tournaments', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        t.*,
        g.name as game_name,
        g.image_url as game_image,
        COUNT(p.id) as participants_count
      FROM tournaments t
      LEFT JOIN games g ON t.game_id = g.id
      LEFT JOIN participants p ON t.id = p.tournament_id
      GROUP BY t.id, g.name, g.image_url
      ORDER BY t.created_at DESC
    `);
    
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Erro ao buscar campeonatos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// GET /api/tournaments/:id - Buscar campeonato específico
app.get('/api/tournaments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const tournamentResult = await pool.query(`
      SELECT 
        t.*,
        g.name as game_name,
        g.image_url as game_image
      FROM tournaments t
      LEFT JOIN games g ON t.game_id = g.id
      WHERE t.id = $1
    `, [id]);
    
    if (tournamentResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Campeonato não encontrado'
      });
    }
    
    const participantsResult = await pool.query(`
      SELECT 
        p.*,
        u.username,
        u.avatar_url
      FROM participants p
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.tournament_id = $1
      ORDER BY p.created_at ASC
    `, [id]);
    
    res.json({
      success: true,
      data: {
        tournament: tournamentResult.rows[0],
        participants: participantsResult.rows
      }
    });
  } catch (error) {
    console.error('Erro ao buscar campeonato:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// POST /api/tournaments - Criar novo campeonato
app.post('/api/tournaments', async (req, res) => {
  try {
    const {
      title,
      description,
      game_id,
      max_participants,
      entry_fee,
      prize_pool,
      start_date,
      end_date,
      status
    } = req.body;
    
    const result = await pool.query(`
      INSERT INTO tournaments (
        title, description, game_id, max_participants, 
        entry_fee, prize_pool, start_date, end_date, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `, [
      title, description, game_id, max_participants,
      entry_fee, prize_pool, start_date, end_date, status
    ]);
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao criar campeonato:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// GET /api/games - Listar todos os jogos
app.get('/api/games', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        g.*,
        COUNT(t.id) as tournaments_count,
        SUM(t.prize_pool) as total_prizes
      FROM games g
      LEFT JOIN tournaments t ON g.id = t.game_id
      GROUP BY g.id
      ORDER BY tournaments_count DESC
    `);
    
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// GET /api/ranking - Buscar ranking global
app.get('/api/ranking', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        u.id,
        u.username,
        u.avatar_url,
        u.level,
        COALESCE(SUM(p.points), 0) as total_points,
        COUNT(DISTINCT p.tournament_id) as tournaments_played,
        COUNT(CASE WHEN p.position = 1 THEN 1 END) as wins,
        COALESCE(SUM(p.prize_won), 0) as total_prizes,
        u.last_online
      FROM users u
      LEFT JOIN participants p ON u.id = p.user_id
      GROUP BY u.id, u.username, u.avatar_url, u.level, u.last_online
      ORDER BY total_points DESC
      LIMIT 100
    `);
    
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// POST /api/users/register - Registrar usuário
app.post('/api/users/register', async (req, res) => {
  try {
    const { username, email, password, roblox_username } = req.body;
    
    // Verificar se usuário já existe
    const existingUser = await pool.query(
      'SELECT id FROM users WHERE email = $1 OR username = $2',
      [email, username]
    );
    
    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Usuário já existe'
      });
    }
    
    const result = await pool.query(`
      INSERT INTO users (username, email, password, roblox_username)
      VALUES ($1, $2, $3, $4)
      RETURNING id, username, email, roblox_username, created_at
    `, [username, email, password, roblox_username]);
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// POST /api/tournaments/:id/join - Inscrever-se em campeonato
app.post('/api/tournaments/:id/join', async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;
    
    // Verificar se campeonato existe e está aberto
    const tournament = await pool.query(
      'SELECT * FROM tournaments WHERE id = $1 AND status = $2',
      [id, 'open']
    );
    
    if (tournament.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Campeonato não encontrado ou não está aberto para inscrições'
      });
    }
    
    // Verificar se usuário já está inscrito
    const existingParticipant = await pool.query(
      'SELECT id FROM participants WHERE tournament_id = $1 AND user_id = $2',
      [id, user_id]
    );
    
    if (existingParticipant.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Usuário já está inscrito neste campeonato'
      });
    }
    
    // Verificar limite de participantes
    const participantCount = await pool.query(
      'SELECT COUNT(*) FROM participants WHERE tournament_id = $1',
      [id]
    );
    
    if (parseInt(participantCount.rows[0].count) >= tournament.rows[0].max_participants) {
      return res.status(400).json({
        success: false,
        message: 'Campeonato está lotado'
      });
    }
    
    // Inscrever usuário
    const result = await pool.query(`
      INSERT INTO participants (tournament_id, user_id, status)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [id, user_id, 'registered']);
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao inscrever usuário:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'CampBlox API está funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint para verificar conexão com banco
app.get('/api/test-db', async (req, res) => {
  try {
    const client = await pool.connect();
    
    // Testar conexão
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `);
    
    // Contar registros
    const gamesCount = await client.query('SELECT COUNT(*) FROM games');
    const tournamentsCount = await client.query('SELECT COUNT(*) FROM tournaments');
    
    client.release();
    
    res.json({
      status: 'OK',
      message: 'Database connection successful',
      tables: result.rows.map(row => row.table_name),
      data: {
        games: parseInt(gamesCount.rows[0].count),
        tournaments: parseInt(tournamentsCount.rows[0].count)
      }
    });
    
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor CampBlox rodando na porta ${PORT}`);
  console.log(`📊 API disponível em: http://localhost:${PORT}/api`);
});

export default app;
