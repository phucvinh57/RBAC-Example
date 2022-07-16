import express, { Express } from "express";
import cookieParser from "cookie-parser";

import route from "./routes";
import { connectToDb } from "./models";

const PORT = 4000;

const app: Express = express();

connectToDb()

app.use(cookieParser())
app.use(express.json())

route(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})