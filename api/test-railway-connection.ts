import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    console.log('🔌 Testando conexão com Railway PostgreSQL...');
    const client = await pool.connect();
    
    // Testar se as tabelas existem
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `);
    
    console.log('✅ Conectado com sucesso!');
    console.log('📊 Tabelas encontradas:');
    result.rows.forEach(row => {
      console.log(`   - ${row.table_name}`);
    });
    
    // Contar registros em cada tabela
    const gamesCount = await client.query('SELECT COUNT(*) FROM games');
    const tournamentsCount = await client.query('SELECT COUNT(*) FROM tournaments');
    
    console.log(`\n📈 Dados encontrados:`);
    console.log(`   - Games: ${gamesCount.rows[0].count}`);
    console.log(`   - Tournaments: ${tournamentsCount.rows[0].count}`);
    
    client.release();
    console.log('\n🎉 Banco de dados funcionando perfeitamente!');
    
  } catch (error) {
    console.error('❌ Erro na conexão:', error instanceof Error ? error.message : 'Erro desconhecido');
  } finally {
    await pool.end();
  }
}

testConnection();
