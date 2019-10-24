import studentDAO from '../../models/student/dao.mjs';

const remove = async (req,res) =>{

    try{

            console.log(req.params.id)
            if (!req.params.id) {
                res.sendStatus(400);
            } else {    

        const student = await studentDAO.remove(req.params.id);

        res.json(student);
            }
    } catch (error){
        
        throw error;
    }
}

export default remove;