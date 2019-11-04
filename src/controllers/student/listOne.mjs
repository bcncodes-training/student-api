import studentDAO from '../../models/student/dao.mjs';
import HTTPerror from 'http-errors';
const listOne = async (req, res,next) => {

    try {

        
/*         if (!req.params.id) {
            next(HTTPerror(404));
        
        } else {
 */
            const student = await studentDAO.listOne(req.params.id);

            res.json(student);
        // }
    } catch (error) {

            next(HTTPerror(404));
    }
}

export default listOne;