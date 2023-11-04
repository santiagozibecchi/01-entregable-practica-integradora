export class Sockets {
  constructor(io) {
    // configuracion de socket proveniente de server.js
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");

      // Funcionalidades!


    });
  }
}
