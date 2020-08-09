// below is same as const express = require('express')
// but we can use import because we have babel to transpile it.
import express from 'express';
const app = express()
const port = 3004

import {registerRoutes} from './routes';

registerRoutes(app);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`journal app listening at http://localhost:${port}`))