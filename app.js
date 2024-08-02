let express=require('express');
let route=require('./route/route');
let mongoose=require('mongoose');
let app=express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/jwtUsers')
.then(()=>{
    console.log('database is connected');
}).catch((e)=>{
    console.log(e);
    console.log('error in database connection');
});
app.listen('3001',()=>{
    console.log('server is started');
});
app.use('/jwt',route);