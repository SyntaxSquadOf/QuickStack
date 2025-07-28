import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { corsOptions } from "./config/Cors";
import { RateLimit } from "./utils/rateLimit";
import swaggerSpec, { swaggerUIOptions } from "./config/Swagger";

const app: Express = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON
app.use(RateLimit); // Middleware para limitar la tasa de solicitudes
app.use(helmet()); // Middleware para mejorar la seguridad de la aplicación
app.use(morgan("dev")); // Middleware para registrar las solicitudes HTTP
app.use(cors(corsOptions)); // Middleware para manejar CORS con opciones personalizadas

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API con express y typescript" });
});

// Ruta para la documentación de la API usando Swagger
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUIOptions),
);

export default app;
