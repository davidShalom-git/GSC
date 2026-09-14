const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_ydaDcEV3iv7T@ep-mute-rice-ayex2i9s-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
});

async function query(text, params) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  // console.log('Executed query', { text: text.slice(0, 80), duration, rows: res.rowCount });
  return res;
}

let isInitialized = false;

async function initDb() {
  if (isInitialized) return;

  try {
    // Ensure pgcrypto extension for gen_random_uuid()
    await query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    // Videos table
    await query(`
      CREATE TABLE IF NOT EXISTS videos (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        url TEXT NOT NULL,
        thumbnail TEXT,
        thumbnail_type VARCHAR(50) DEFAULT 'url',
        type VARCHAR(50) DEFAULT 'video',
        duration INT,
        mime_type VARCHAR(100) DEFAULT 'audio/mpeg',
        file_size INT,
        storage_type VARCHAR(50) DEFAULT 'url',
        upload_date TIMESTAMPTZ DEFAULT NOW(),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    // Event posters / images table
    await query(`
      CREATE TABLE IF NOT EXISTS event_images (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        original_name VARCHAR(255),
        mime_type VARCHAR(100) NOT NULL,
        size INT NOT NULL,
        base64_data TEXT NOT NULL,
        upload_path VARCHAR(255),
        uploaded_at TIMESTAMPTZ DEFAULT NOW(),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    // Promise words table
    await query(`
      CREATE TABLE IF NOT EXISTS promise_words (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        original_name VARCHAR(255),
        mime_type VARCHAR(100) NOT NULL,
        size INT NOT NULL,
        base64_data TEXT NOT NULL,
        upload_path VARCHAR(255),
        uploaded_at TIMESTAMPTZ DEFAULT NOW(),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    isInitialized = true;
    console.log("✅ NeonDB (PostgreSQL) Connected and Tables Verified!");
  } catch (error) {
    console.error("❌ Failed to initialize NeonDB:", error);
    throw error;
  }
}

module.exports = {
  pool,
  query,
  initDb
};
