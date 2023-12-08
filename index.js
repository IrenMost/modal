import express from "express";
import fs from "fs/promises"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use("/client", express.static(`${__dirname}/client`));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/client/index.html`));
});

app.listen(3000, () => {
    console.log(`Open this link in your browser: http://127.0.0.1:3000`);
  });
