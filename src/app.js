import { initMongoDB } from "./db/mongodb.js";
import { Server } from "./server.js";
import "dotenv/config";

// Coneccion a la base de datos
await initMongoDB();

// Inicializamos la instancia del Servidor
const server = new Server();
server.execute();
