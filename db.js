import pkg from 'pg';
const {Pool} = pkg;


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "education_platform",
    password: 'killerXD9.',
    port:5432
})

export default pool;
