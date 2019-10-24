import studentDAO from '../../models/student/dao.mjs';

const removeProjects = async (req, res) => {

    try {

        console.log(req.params.id)
        if (!req.params.id) {
            res.sendStatus(400);
        } else {

            const student = await studentDAO.update(req.params.id,{projects:[]});

            res.json(student);
        }

    } catch (error) {

        throw error;
    }
}

export default removeProjects;