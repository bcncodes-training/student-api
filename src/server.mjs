//import https from 'https';
import http from 'http';
import app from './app.mjs';

http.createServer(app)
 .listen(process.env.PORT);
    
   