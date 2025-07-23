import express, { Express } from "express";
import { RateLimit } from "./utils/rateLimit";
import helmet from "helmet";
import morgan from "morgan";

const app: Express = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON
app.use(RateLimit); // Middleware para limitar la tasa de solicitudes
app.use(helmet()); // Middleware para mejorar la seguridad de la aplicación
app.use(morgan("dev")); // Middleware para registrar las solicitudes HTTP

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API con express y typescript" });
});

export default app;
