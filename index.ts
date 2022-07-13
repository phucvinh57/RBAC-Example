import express, { Express } from "express";
import router from "./routes";

const PORT = 4000;

const app: Express = express();

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})