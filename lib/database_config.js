module.exports = {
    database: 'my_database',
    host: 'localhost',
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    user: process.env.DATABASE_USER
  };