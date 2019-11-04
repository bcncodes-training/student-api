import Router from 'express';

import create from './create.mjs';
import update from './update.mjs';
import remove from './remove.mjs';
import list from './list.mjs';
import listOne from './listOne.mjs';
import removeProjects from './removeProjects.mjs';


const router = Router();

router.route('/')
    .post(create)
    .get(list);

router.route('/:id')
    .get(listOne)
    .put(update)    
    .delete(remove);
    

router.route('/:id/projects')    
    .delete(removeProjects);
    
export default router;        