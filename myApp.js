const { JSONCookie } = require('cookie-parser');
let express = require('express');
let app = express();
require('dotenv').config();

// console.log("Hello World");
//app.method('PATH', handler);
// app.get('/', (req, res)=>{
//     res.send('Hello Express');
// });

//Middleware simple log
app.use((req, res, next)=>{ 
    console.log(req.method + " "+ req.path +" - "+req.ip);
    next();
});
//GET /json - ::ffff:127.0.0.1
// req.method, req.path and req.ip

//load public css
app.use('/public', express.static(__dirname + '/public'));

//serve an HTML file
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
//to /json 
app.get('/json', (req, res)=>{
    let response = {"message" : "Hello json"}
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        response.message = response.message.toUpperCase()
    }else{
        response.message
    }
    res.json(response)
});

























 module.exports = app;
