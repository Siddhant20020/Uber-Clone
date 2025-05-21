const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Handle user or captain joining with socketId saved to DB
    socket.on('join', async (data) => {
      try {
        const { userId, userType } = data;

        if (!userId || !userType) {
          return socket.emit('error', { message: 'Missing userId or userType' });
        }

        if (userType === 'user') {
          await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
        } else if (userType === 'captain') {
          await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
        } else {
          return socket.emit('error', { message: 'Invalid userType' });
        }
      } catch (error) {
        console.error('Error in join event:', error);
        socket.emit('error', { message: 'Failed to join' });
      }
    });

    // Update captain's location with validation
    socket.on('update-location-captain', async (data) => {
      try {
        const { userId, location } = data;

        if (
          !userId ||
          !location ||
          typeof location.lat !== 'number' ||
          typeof location.lng !== 'number'
        ) {
          return socket.emit('error', { message: 'Invalid location data' });
        }

        await captainModel.findByIdAndUpdate(userId, {
          location: {
            lat: location.lat,
            lng: location.lng,
          },
        });
      } catch (error) {
        console.error('Error updating captain location:', error);
        socket.emit('error', { message: 'Failed to update location' });
      }
    });

    // Clear socketId on disconnect to prevent stale references
    socket.on('disconnect', async () => {
      console.log(`Client disconnected: ${socket.id}`);

      try {
        await userModel.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
        await captainModel.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
      } catch (error) {
        console.error('Error clearing socketId on disconnect:', error);
      }
    });
  });
}

/**
 * Emits an event to a specific socket ID
 * @param {string} socketId - Socket.io client ID
 * @param {{event: string, data: any}} messageObject - Event name and payload
 */
function sendMessageToSocketId(socketId, messageObject) {
  if (!io) {
    console.warn('Socket.io not initialized.');
    return;
  }

  if (!socketId) {
    console.warn('No socketId provided for sendMessageToSocketId');
    return;
  }

  if (!messageObject || !messageObject.event) {
    console.warn('Invalid messageObject for sendMessageToSocketId');
    return;
  }

  io.to(socketId).emit(messageObject.event, messageObject.data);
}

module.exports = { initializeSocket, sendMessageToSocketId };
