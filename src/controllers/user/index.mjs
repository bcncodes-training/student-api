import Router from 'express';

import login from './login.mjs';
import register from './register.mjs';
import {authLocal} from '../../middleware/auth.mjs';

const router = Router();


router.post('/login', authLocal,login);
router.post('/register', register);
    
export default router;        