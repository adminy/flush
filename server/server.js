const net = require('net');
const ADDR = '192.168.1.77'
const PORT = 8888
const connections = []
const server = net.createServer(function(socket) {
	console.log('connected')
	connections.push(socket)
	//socket.write('Echo server\r\n');
	socket.on('data', function(msg) {
		console.log(new TextDecoder('utf-8').decode(msg))
		socket.write('received: ' + new TextDecoder('utf-8').decode(msg))
	})
	//socket.pipe(socket);
});

server.listen(PORT, ADDR)
process.on('SIGINT', function() {
    console.log("Closing Server")
    connections.forEach(connection => connection.destroy())
    server.close()
    process.exit()
})
