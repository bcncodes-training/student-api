import studentDAO from '../../models/student/dao.mjs';
import projectDAO from '../../models/project/dao.mjs';

const create = async (req, res) => {
    try {
        if (!req.body) {

            res.sendStatus(400);
        } else {

            const arrId = [];

            await Promise.all(req.body.projects.map (async element =>{
                try {
                   
                    arrId.push({"_id":(await projectDAO.create(element))._id});

                } catch (error) {
                    throw error;
                }
            
            }));
            console.time('create');
//            const student = await studentDAO.create(Object.assign({},{name:req.body.name, projects: arrId}));    
            const student = await studentDAO.create(Object.assign({},req.body, {projects: arrId}));    
            console.timeEnd('create');
                
            res.send(student);
            
        }
    } catch (error) {
        res.send('ha habido un error');
        throw error;
    }
}

export default create;