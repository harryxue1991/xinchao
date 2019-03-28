import io from 'socket.io-client';

import config from './config/client';


const options = {
    // reconnectionDelay: 1000,
};
const socket = io(config.server, options);
export default socket;
