const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
		end = new Date().getTime();
	}
}

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(data) {
		wss.clients.forEach(function each(client) {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(data);
				wait(1000);
				console.log("hello");
				wait(1000);

			}
		});
	});
});
