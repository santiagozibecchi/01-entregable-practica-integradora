import MessageManager from "./dao/MessageManager.js";

export class Sockets {
  constructor(io) {
    // configuracion de socket proveniente de server.js
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      console.log("Cliente conectado");

      socket.emit("get-all-message", await MessageManager.get());

      // Funcionalidades para los mensajes
      socket.on("send-message", async (data) => {
        await MessageManager.send(data);

        socket.emit("get-all-message", await MessageManager.get());
      });

      socket.on("delete-message", async (id) => {
        await MessageManager.delete(id);

        socket.emit("get-all-message", await MessageManager.get());
      });
    });
  }
}
