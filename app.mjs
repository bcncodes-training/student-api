import express from 'express';
import controller from './controllers/student/index.mjs';
import errorHandler from './middleware/error-handler.mjs';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/student',controller);


app.use(errorHandler.logError);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler);

export default app;