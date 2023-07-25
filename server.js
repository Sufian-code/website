let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/plustwo',(req,res)=>{
    
    let Code = 200;
    let Msg = 'successful';
    let n1 = req.query.n1; 
    let n2 = req.query.n2; 
    let result = parseInt(n1) + parseInt(n2); 

    res.json({
        message:Msg, 
        code: Code, 
        data: result
    });
});

app.listen(port, () => {
    console.log('server started');
});