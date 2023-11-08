import express from 'express';
import config from './config.js';
import bodyParser from 'body-parser';

const server = express();

import bookRoutes from './routes/books.js';
import connectDB from './lib/db.js';

server.use(bodyParser.json())
server.use('/books', bookRoutes);

connectDB();
server.listen(config.server.port,()=>{
    console.log('Server listening on Port',config.server.port,'!!!');
})