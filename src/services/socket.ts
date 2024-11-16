import { io } from 'socket.io-client';

export const createSocketConnection = () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token is missing!');

  const socket = io('http://localhost:5000', {
    auth: {
      token,
    },
  });

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('connect_error', (err) => {
    console.error('WebSocket connection error:', err);
  });

  return socket;
};
