let express=require('express');
let controller=require('../controller/controller');
let authtication=require('../middleware/middleware');
let route=express.Router();
route.get('/',controller.getAll);
route.post('/add',controller.addData);
route.post('/check',controller.validateData);
route.get('/getPage',authtication,controller.HomeData);
module.exports=route;