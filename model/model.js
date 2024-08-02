let mongoose=require('mongoose');
let obj=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
});
let mongoose2=mongoose.model('validity',obj);
module.exports=mongoose2;