(function () {
  // Conexión con el socket server
  const socket = io("http://localhost:8080");

  console.log("SOCKET MESSAGE");
  /// Para emitir
  // socket.emit('mensaje-to-server', { data });

  // Para escuchar
  socket.on("mensaje-from-server", (data) => {
    // callback a ejecutar
  });
})();
