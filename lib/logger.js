import pino from 'pino';
import path from 'node:path';
import config from '../config.js';

const transport = pino.transport({
  targets: [
    { 
        target: 'pino/file',
        level: 'error',
        options:{
            destination: path.join(config.dirname,'logs/error-log.txt'),
            mkdir:true,
        }
    },
    { 
        target: 'pino/file',
        level: 'info',
        options:{
            destination: path.join(config.dirname,'logs/info-log.txt'),
            mkdir:true, 
        }
    }
  ]
})

const logger = pino(transport);

export default logger;