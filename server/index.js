require('dotenv').config();

const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());




const port = process.env.PORT;  
app.listen(port, ()=>{
    console.log(`Port ${port} is listening. Tell us all about it.`)
})