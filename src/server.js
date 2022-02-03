const express = require('express');
const routes = require('./start/routes');
const bodyParser = require('body-parser');

//require('./database');
const app = express();


app.use(express.json());

//para acessar as  rotas 
app.use(routes);

 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

/* app.get('/', (req, res)=>{
    res.send('OK');
}); */

app.listen(3333);