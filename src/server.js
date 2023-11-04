// SERVIDOR DE EXPRESS
import express from "express";
import http from "http";
import cors from "cors";

// SOCKET
import { Server as SocketServer } from "socket.io";
import { Sockets } from "./sockets.js";

// CONFIGURATIONS
import handlebars from "express-handlebars";
import path from "path";

// API
import productsApiRouter from "./routers/api/products.router.js";
import cartsApiRouter from "./routers/api/carts.router.js";

// VIEWS
import productsRouterView from "./routers/views/products.router.js";
import messagesRouterView from "./routers/views/messages.router.js";

// UTILS
import { __dirname } from "./utils.js";

export class Server {
  constructor() {
    // porque instanciamos aca?
    // Porque cuando se crea el objeto de la instancia de esta clase, esto sea lo primero que se resuelva
    // para despues poder interactuar con estas funcionalidades

    // Creación del Servidor de Express
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets.io
    this.io = new SocketServer(this.server, {
      /* configuraciones */
    });

    // Inicializar instancia de Sockets (CLASE)
    this.sockets = new Sockets(this.io);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Desplegar el directorio público
    this.app.use(express.static(path.join(__dirname, "../public")));
    console.log(path.join(__dirname, "../public"));
    // CORS
    this.app.use(cors());

    // Configuracion de handlebars
    this.app.engine("handlebars", handlebars.engine());
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "handlebars");

    // Middleware de error
    this.app.use((error, req, res, next) => {
      const message = `Ah ocurrido un error inesperado 😨: ${error.message}`;
      console.error(message);
      res.status(500).json({ message });
    });

    // Views
    this.app.use("/products", productsRouterView);
    this.app.use("/messages", messagesRouterView);

    // Routes
    this.app.use("/api", productsApiRouter);
    this.app.use("/api", cartsApiRouter);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}
