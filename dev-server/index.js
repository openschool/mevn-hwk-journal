// below is same as const express = require('express')
// but we can use import because we have babel to transpile it.
import express from 'express';
const app = express()
const port = 3004

import {registerRoutes} from './routes';
import {setEnvironment} from './config/env';

setEnvironment(app);
registerRoutes(app);

app.get('/', (req, res) => {
    if(process.env.NODE_ENV !== 'production'){
    return res.send('Running server in development mode')
    } else {
        return res.sendFile('index.html',{root: __dirname + '/../dist'});
    }

})

app.listen(port, () => console.log(`journal app listening at http://localhost:${port} in ` + process.env.NODE_ENV + ' mode!'));