var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./LoganStore.html"));
});

app.listen(3000, function(){
    console.log('listening on Port 3000 :)')
})