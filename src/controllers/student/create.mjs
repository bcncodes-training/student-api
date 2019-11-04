import studentDAO from '../../models/student/dao.mjs';
import projectDAO from '../../models/project/dao.mjs';
import HTTPerror from 'http-errors';
const create = async (req, res, next) => {
    try {
        if (!req.body.projects) {
            
            next(HTTPerror(400,{message:'projects not found'}));
        } else {

            const arrId = [];

            await Promise.all(req.body.projects.map (async element =>{
                try {
                   
                    arrId.push({"_id":(await projectDAO.create(element))._id});

                } catch (error) {
                    next(error);
                }
            
            }));
            console.time('create');
//            const student = await studentDAO.create(Object.assign({},{name:req.body.name, projects: arrId}));    
            const student = await studentDAO.create(Object.assign({},req.body, {projects: arrId}));    
            console.timeEnd('create');
                
            res.send(student);
            
        }
    } catch (error) {
        next(error);
    }
}

export default create;