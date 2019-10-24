import express from 'express';
import controller from './controllers/student/index.mjs';
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/student',controller);
//app.get('/',(q,r) => r.send('hola'));

//app.post('/',(q,r)=>res.send('hola post'));
app.listen(3000,_=>console.log('listen on 3000'));
