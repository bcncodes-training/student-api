import studentDAO from '../../models/student/dao.mjs';
import HTTPerror from 'http-errors';
const remove = async (req,res, next) =>{

    try{

            console.log(req.params.id)
            if (!req.params.id) {
                next(HTTPerror(404));
            } else {    

        const student = await studentDAO.remove(req.params.id);

        res.json(student);
            }
    } catch (error){
        
        next(error);
    }
}

export default remove;