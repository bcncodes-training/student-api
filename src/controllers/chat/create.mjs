import chatDAO from '../../models/chat/dao.mjs';

import HTTPerror from 'http-errors';


const create = io => async (req, res, next) => {
    try {
        if (!req.body.to) {
            
            next(HTTPerror(400,{message:'recipient is needed'}));

        } else {

            const chat = await chatDAO.create(Object.assign({},req.body));    

            io.emit('message', chat);
            res.send(chat);
            
        }
    } catch (error) {
        next(error);
    }
}

export default create;