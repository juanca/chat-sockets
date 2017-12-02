console.log('hello world');

const websocket = new WebSocket('ws://localhost:8080');

websocket.onopen = function (event) {
  websocket.send("Here's some text that the server is urgently awaiting!");
};
