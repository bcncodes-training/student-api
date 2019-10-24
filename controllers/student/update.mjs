import studentDAO from '../../models/student/dao.mjs';

const update = async (req, res) => {
    try {
        console.log(req.params.id);        
        if (!req.body || !req.params.id) {
            res.sendStatus(400);
        } else {
            console.log(req.params.id);
            console.log(req.body);
            const student = await studentDAO.update(req.params.id,req.body);
            res.json(student);
        }
    } catch (error) {
        res.send('ha habido un error');
        throw error;
    }
}

export default update;
