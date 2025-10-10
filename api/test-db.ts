import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function testConnection() {
  try {
    console.log('🔌 Testando conexão com PostgreSQL...');
    
    const client = await pool.connect();
    console.log('✅ Conectado ao PostgreSQL!');
    
    // Testar query simples
    const result = await client.query('SELECT NOW() as current_time');
    console.log('⏰ Hora atual do banco:', result.rows[0].current_time);
    
    client.release();
    
    // Verificar se as tabelas existem
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    console.log('📋 Tabelas existentes:', tablesResult.rows.map(row => row.table_name));
    
    if (tablesResult.rows.length === 0) {
      console.log('⚠️  Nenhuma tabela encontrada. Execute: npm run api:init-db');
    }
    
  } catch (error) {
    console.error('❌ Erro na conexão:', error.message);
  } finally {
    await pool.end();
  }
}

testConnection();
