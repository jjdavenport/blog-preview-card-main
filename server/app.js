import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const distPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(distPath));

app.get("@", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening in on http://${HOST}:${PORT}`);
});
