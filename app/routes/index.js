module.exports = function(app){

    require('./auth')(app);

    app.get('/',function(req,res){
        res.sendFile('index.html');
    });

    

    
};