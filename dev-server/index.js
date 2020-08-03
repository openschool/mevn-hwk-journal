// const express = require('express')
import express from 'express';
const app = express()
const port = 3004

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`journal app listening at http://localhost:${port}`))