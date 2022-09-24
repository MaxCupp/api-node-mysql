import express from "express"; // USO DE ESMODULR CON VERSION DE NODE v16.17.0

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Para poder enciar json en el body

app.use(express.json());

// Creando los ENDPOINTS

// Usando las rutas de index.routes.js

app.use(indexRoutes);

// Usando las rutas traidas de employees.routes.js

app.use("/api", employeesRoutes); // Se le pone el prefijo /api a las rutas

// Si no hay una ruta, vamos a emplear un middleware para enviar una respuesta

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint Not Found",
  });
});

export default app;
