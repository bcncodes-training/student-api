//import mongoose from 'mongoose';
import Chat from './model.mjs';
import mongo from '../../mongo/MongoManager.mjs';

class chatDAO {

    constructor(){
        mongo.connect();
    }


create(data){

    const chat = new Chat(data);
    return chat.save();
}

}

export default new chatDAO();