const { JSONCookie } = require('cookie-parser');
let express = require('express');
let app = express();
require('dotenv').config();

// console.log("Hello World");
//app.method('PATH', handler);
// app.get('/', (req, res)=>{
//     res.send('Hello Express');
// });

//load public css
app.use('/public', express.static(__dirname + '/public'));

//serve an HTML file
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
//to /json 
app.get('/json', (req, res)=>{
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({
            "message" : "hello json".toUpperCase()
        });
    }else{
        res.json({
            "message" : "hello json"
        });
    }
});

























 module.exports = app;
