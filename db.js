import pg from 'pg';
const {Pool} = pg;

const localPoolConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'jwttutorial',
    password: '',
    port: 5432,
};

const poolConfig =  process.env.DATABASE_URL ? { 
    connectionString:process.env.DATABASE_URL,
    ssl: {rejectUnauthorized:false}
} : localPoolConfig;

const pool = new Pool(poolConfig);

export default pool;