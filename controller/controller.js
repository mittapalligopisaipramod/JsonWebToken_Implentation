let mongoose2=require('../model/model');
let bcrypt=require('bcrypt');
let jwt=require('jsonwebtoken');
let getAll=async (req,res)=>{
    try {
        let getData=await mongoose2.find();
        res.json(getData);
    } catch (error) {
        console.log(error);
        console.log('error in getData method');
    }
}
let addData=async(req,res)=>{
    try {
        let requestBody=req.body;
        let passwordEncoded=await bcrypt.hash(requestBody.password,10);
        let insert=await mongoose2.create({"email":requestBody.email,"password":passwordEncoded});
        res.json(insert);
    } catch (error) {
        console.log(error);
        console.log('error is in addData method');
    }
}
let validateData=async(req,res)=>{
    try {
        let userRequest=req.body;
        let userRetrive=await mongoose2.findOne({"email":userRequest.email});
        if(userRetrive===null){
            res.json({'message':'not valid email'});
        }
        let vaildbcrypt=await bcrypt.compare(userRequest.password,userRetrive.password);
        if(!vaildbcrypt){
            res.json({"message":"invalid password"});
        }
        let token=jwt.sign({id:userRetrive._id},"my_serect_key",{expiresIn:'1h'});
        res.json(token);
    } catch (error) {
        console.log(error);
    }
}
let HomeData=async(req,res)=>{
    try {
        res.json('welcome to new page your tokn gets valid');
        console.log(req.user);
    } catch (error) {
        console.log(error);
        console.log('error in home page');
    }
}
module.exports={
    getAll,
    addData,
    validateData,
    HomeData
}