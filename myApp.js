const { JSONCookie } = require('cookie-parser');
let express = require('express');
const { get } = require('express/lib/response');
let app = express();
const bodyParser = require('body-parser');
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
//middleware
app.get('/now',
    (req, res, next)=>{
    req.time = new Date().toString()
    next();
    },(req, res)=>{
        res.json({
            time: req.time
        })
    }
)
//middleware bodyparser
app.use(bodyParser.urlencoded({extended: false}))


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
//get route params from the client
app.get("/:word/echo", (req, res)=>{
    // console.log(req.params);
    res.json({
        echo: req.params.word
    });
});


//get query parameter input from the client
//example url http://localhost:3000/name?first=firstname&last=lastname
app.get("/name", (req, res)=>{
    let firstname = req.query.first;
    let lastname = req.query.last;
    res.json({
        name: `${firstname} ${lastname}`
    })
    console.log(req.query);
});
//get data from HTML form
app.post("/name", (req, res)=>{
    let firstname = req.body.first;
    let lastname = req.body.last;
    // console.log(firstname, lastname);
    res.json({
        name : `${firstname} ${lastname}`
    })
}); 





















 module.exports = app;
