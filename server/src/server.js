import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().listen(8090);

    store.subscribe(
        () => io.emit('SET_STATE', store.getState())
    );

    io.on('connection', (socket) => {
        socket.emit('SET_STATE', store.getState());
        socket.on('action', store.dispatch.bind(store));
    });
};
