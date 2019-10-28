import studentDAO from '../../models/student/dao.mjs';
import HTTPerror from 'http-errors';
const removeProjects = async (req, res,next) => {

    try {

        console.log(req.params.id)
        if (!req.params.id) {
            next(HTTPerror(404));
        } else {

            const student = await studentDAO.update(req.params.id,{projects:[]});

            res.json(student);
        }

    } catch (error) {

        next(error);
    }
}

export default removeProjects;