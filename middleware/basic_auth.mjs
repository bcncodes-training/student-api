import auth from 'basic-auth';
import studentDAO from '../models/student/dao.mjs';
import HTTPerror from 'http-errors';

const passwordCodr = pass => Buffer.from(pass,'base64');

const basicAuth = async (req,res,next) => {
    try{
        const user = auth(req);
        
        const data = {name: user.name, password:passwordCodr(user.pass)   }

        const student = await studentDAO.checkUser(data);

        if(!student) throw error;
        next(); 

    
    }catch(error){
        next(HTTPerror(401));
    }
}


export default basicAuth;