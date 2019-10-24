import studentDAO from '../../models/student/dao.mjs';

const create = async (req, res) => {
    try {
        if (!req.body) {
            res.sendStatus(400);
        } else {

            const student = await studentDAO.create(req.body);
            res.send(student);
        }
    } catch (error) {
        res.send('ha habido un error');
        throw error;
    }
}

export default create;