(function(){

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


var database = require('./config/database');
var port = require('./config/config').port;

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));

require('./app/routes/index')(app);


app.listen(port,function(){
    console.log('sdfg');
});

}())

