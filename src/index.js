import app from "./app.js";
import { PORT } from "./config.js";

// Poniendo en escucha al servidor express en el puerto 3000

app.listen(PORT);
console.log("Server running on port", PORT);
