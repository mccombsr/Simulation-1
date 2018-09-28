const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());




const port = 4000;  
app.listen(port, ()=>{
    console.log(`Port ${port} is listening. Tell us all about it.`)
})