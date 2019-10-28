import studentDAO from '../../models/student/dao.mjs';
import HTTPerror from 'http-errors';

const update = async (req, res, next) => {
    try {
/*         console.log(req.params.id);        
        if (!req.body || !req.params.id) {
            next(HTTPerror(400));
        } else {
            console.log(req.params.id);
            console.log(req.body);
 */            const student = await studentDAO.update(req.params.id,req.body);
            res.json(student);
        // }
    } catch (error) {
       // res.send('ha habido un error');
        next(HTTPerror(400));
    }
}

export default update;
