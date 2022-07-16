import mysql, { Connection, QueryError } from "mysql2";
import { config } from 'dotenv';
import util from 'util';
config()

if(!process.env.DB) {
    console.log("Database not selected");
    process.exit(0)
}

const connection: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
})

export const connectToDb = () => connection.connect((err: QueryError | null) => {
    if (err) console.log(err)
    else console.log("Database connected successfully !")
})

export const dbQuery = util.promisify(connection.query).bind(connection);
export default connection;