import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: '5432',
  database: 'PortfolioServer',
});
await client.connect();
const db = drizzle(client);

client.connect()
.then(() => {
console.log('Connected to PostgreSQL database');
})
.catch((err) => {
console.error('Error connecting to PostgreSQL database', err);
});

module.exports = db;
