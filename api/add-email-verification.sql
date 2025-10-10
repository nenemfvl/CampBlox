-- Adicionar colunas de verificação de email na tabela users
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS verification_token VARCHAR(255),
ADD COLUMN IF NOT EXISTS verification_token_expires TIMESTAMP;

-- Criar índice para o token de verificação
CREATE INDEX IF NOT EXISTS idx_users_verification_token ON users(verification_token);
