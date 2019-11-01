const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.2",
  database: "tasklist",
  password: "secret",
  port: 5432,
});

module.exports = pool;