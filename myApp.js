let express = require('express');
let app = express();

// console.log("Hello World");
//app.method('PATH', handler);
// app.get('/', (req, res)=>{
//     res.send('Hello Express');
// });

//load public css
app.use(express.static(__dirname + '/public'));

//serve an HTML file
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});



























 module.exports = app;
