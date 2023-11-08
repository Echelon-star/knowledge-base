import mongoose from 'mongoose';
import config from '../config.js';

export default async function connectDB(){
    try {
        let url = getConnectionString(config.db);

        console.log(url);
        await mongoose.connect( url, {});
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Err connecting DB', error);
        process.exit(0);
    }
}

function getConnectionString(db){
    return `mongodb://${db.host}:${db.port}/${db.name}`
}

