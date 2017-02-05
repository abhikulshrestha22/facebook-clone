module.exports = function(app){

    // app.get('/a',function(req,res){
    //     res.sendFile('index.html');
    // })

    app.get('/',function(req,res){
        res.sendFile('index.html');
    });

    
};