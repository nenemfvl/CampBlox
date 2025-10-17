import { Pool } from 'pg';

// Configuração do banco de dados Railway
const pool = new Pool({
  connectionString: 'postgresql://postgres:LoDhMopvhUvKQjVcYJTmrIymNRKWWfGQ@caboose.proxy.rlwy.net:18824/railway'
});

async function updateDatabase() {
  try {
    console.log('Conectando ao banco de dados Railway...');
    
    // Adicionar colunas de verificação de email
    console.log('Adicionando colunas de verificação de email...');
    await pool.query(`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS verification_token VARCHAR(255),
      ADD COLUMN IF NOT EXISTS verification_token_expires TIMESTAMP;
    `);
    
    // Criar índice para o token de verificação
    console.log('Criando índice para token de verificação...');
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_users_verification_token ON users(verification_token);
    `);
    
    console.log('✅ Colunas de verificação de email adicionadas com sucesso!');
    
    // Verificar se as colunas foram criadas
    const result = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'users' 
      AND column_name IN ('email_verified', 'verification_token', 'verification_token_expires')
      ORDER BY column_name;
    `);
    
    console.log('Colunas encontradas:');
    result.rows.forEach(row => {
      console.log(`- ${row.column_name}: ${row.data_type} (nullable: ${row.is_nullable})`);
    });
    
  } catch (error) {
    console.error('❌ Erro ao atualizar banco de dados:', error);
  } finally {
    await pool.end();
    console.log('Conexão com banco de dados encerrada.');
  }
}

updateDatabase();

