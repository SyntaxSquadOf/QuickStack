import express, { Express } from "express";
import { RateLimit } from "./utils/rateLimit";

const app: Express = express();

app.use(express.json());
app.use(RateLimit);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API con express y typescript" });
});

export default app;
