require('dotenv').config();

const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((dbInstance)=>{
    app.set('db', dbInstance);
    console.log(`DB now taking calls.`)
})
.catch((err)=>{
    console.log(err)
})

app.get('/api/inventory', controller.getAll)
app.post('/api/product', controller.create)




const port = process.env.PORT;  
app.listen(port, ()=>{
    console.log(`Port ${port} is listening. Tell us all about it.`)
})