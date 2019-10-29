import https from 'https';
import app from './app.mjs';
import fs from 'fs';
import path from 'path';

https.createServer({
    key: fs.readFileSync( './config/server.key'),
    cert: fs.readFileSync( './config/server.cert')
}, app)
.listen(8443, _=> {
    console.log('Example app listening on port 8443! Go to https://localhost:8443/') });
    
   