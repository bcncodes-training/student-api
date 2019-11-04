import https from 'https';
import app from './app.mjs';
import fs from 'fs';



https.createServer({
    key: fs.readFileSync( './config/server.key'),
    cert: fs.readFileSync( './config/server.cert')
}, app)
.listen(process.env.PORT, _=> {
    console.log('Example app listening on port 8443! Go to https://localhost:8443/') });
    
   