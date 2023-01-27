const env = {
    username: "postgres",
    host: "localhost",
    database: "education_platform",
    password: 'killerXD9.',
    port:5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = env

