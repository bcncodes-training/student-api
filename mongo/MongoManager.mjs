import mongoose from 'mongoose';
//import config from '../config/config.mjs';

class MongoManager {

    #config;
    
    constructor(url_mongo){
        this.#config = url_mongo;
    }
    getConnectionURL(){
        return this.#config;
    }

    isConnected(){
        mongoose.connection.on('connected',_=> true);
    }
    
    connect () {
        return mongoose.connect(this.getConnectionURL(),
        { useNewUrlParser: true, useUnifiedTopology: true });
      }
    
    disconnect(){
        mongoose.disconnect();
    }

}

export default new MongoManager(process.env.MONGODB_URI);