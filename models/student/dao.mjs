import Student from './model.mjs';
import mongo from '../../mongo/MongoManager.mjs';

class studentDAO {

    constructor(){
        mongo.connect();
    }


create(data){
   
    const student = new Student();
    Object.assign(student, data);

    return student.save();
}

list(){
    return Student.find().exec();
}

listOne(id){
    
    return Student.findById(id).exec();
}
update(id,data){
    return Student.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
}
remove(id){
    
    return Student.findByIdAndRemove(id,{useFindAndModify:false}).exec();
}



}

export default new studentDAO();