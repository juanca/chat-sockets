import { createStore } from 'redux';

console.log('hello world');

const initialState = [];

const store = createStore((state = initialState, action) => {
  switch(action.type) {
    case 'NEW_MESSAGE': return state.concat(action.payload);
    default: return state;
  }
});

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'NEW_MESSAGE', payload: 'poops' });

const websocket = new WebSocket('ws://localhost:8080');

websocket.onopen = function (event) {
  websocket.send("Here's some text that the server is urgently awaiting!");
};
