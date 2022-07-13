import mysql, { Connection } from 'mysql2';
import { config } from 'dotenv';
import util from 'util';

config()

const connection: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

export const query = util.promisify(connection.query).bind(connection);
export default connection;