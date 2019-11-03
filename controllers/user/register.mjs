import userDAO from '../../models/user/dao.mjs';

import HTTPerror from 'http-errors';

const register = async (req, res, next) => {
    try {
        if (!req.body.user.name) {
            
            next(HTTPerror(400,{message:'name is needed'}));

        } else {

            const user = await userDAO.create(Object.assign({},req.body.user));    

            res.send(user);
            
        }
    } catch (error) {
        next(error);
    }
}

export default register;