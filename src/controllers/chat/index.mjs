import Router from 'express';
import create from './create.mjs';


export default io =>{
const router = Router();


router.post('/', create(io));
return router;
    }