(function(){

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var passport = require('passport');

var jwtStrategy = require('passport-jwt').Strategy;
var extractJwt = require('passport-jwt').ExtractJwt;
var opts = {};

opts.jwtFromRequest = extractJwt.fromAuthHeader();
opts.secretOrKey = 'secret';
passport.use(new jwtStrategy(opts,function(jwt_payload,done){
    console.log("in the jwt strategy");
    done(null,"a");
}));

app.post('/login',function(req,res){
    if(req.body.username==="test" && req.body.password==="test"){
        var myToken = jwt.sign({username:req.body.username},'secret');
        res.json({token:myToken});
    }
})

app.post('/profile',passport.authenticate('jwt',{session:false}),
            function(req,res){
                res.json("access the profile");
            });

var database = require('./config/database');
var port = require('./config/config').port;

mongoose.connect(database.url);

//app.get('/app',express.static(__dirname + '/public/app'));
app.use(express.static(__dirname + '/public'));



require('./app/routes/index')(app);


app.listen(port,function(){
    console.log('sdfg');
});

}())

