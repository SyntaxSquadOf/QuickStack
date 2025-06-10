import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API con express y typescript" });
});

export default app;
