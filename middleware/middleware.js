//let express=require('express');
let jwt=require('jsonwebtoken');
function authtication(req,res,next){
    const token=req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }   
    try {
        const verify=jwt.verify(token,"my_serect_key");
        req.user=verify;
        next();
    } catch (error) {
        res.status(400).json({"message":"invalid token"});
    }
};
module.exports=authtication;