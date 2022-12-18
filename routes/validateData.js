var express=require('express');
var router=express.Router();
var {MongoClient}=require("mongodb");
var bcrypt=require('bcrypt');

const url = 'mongodb://127.0.0.1:27017/';


router.post('/',(request,response)=>{
    
       MongoClient.connect(url,(err,client)=>{
        request.session.isUserLoogedin=false;
            var db=client.db("test");
            var collection=db.collection("collection");
            collection.find({id:request.body.name}).toArray((error,data)=>{
                var responseData={
                    msg :''
                }
                if(data.length){
                    var isValidPwd=bcrypt.compareSync(request.body.pwd,data[0].pwd);
                    if(isValidPwd){
                        responseData.msg='Valid';
                        request.session.isUserLoogedin=true;
                    }else{
                        responseData.msg='Invalid';
                    }
                    
                }
                else{
                    responseData.msg='Invalid';
                }
                responseData=JSON.stringify(responseData);
                response.send(responseData);
            });
    });
   
});
module.exports=router;