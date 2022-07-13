import express, { Express } from "express";
const PORT = 4000;

const app: Express = express();

app.use(express.json())



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})