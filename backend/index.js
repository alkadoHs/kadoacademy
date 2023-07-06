import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({ appName: "kadoacademy" });
});

app.listen(PORT, (req, res) => {
  console.log(`server listening to http://localhost:${PORT}`);
});
