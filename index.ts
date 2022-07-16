import express, { Express } from "express";
import route from "./routes";

const PORT = 4000;

const app: Express = express();

app.use(express.json())

route(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})