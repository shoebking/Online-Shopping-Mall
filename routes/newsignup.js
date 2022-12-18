var express = require('express');
var router = express.Router();
var {MongoClient}=require("mongodb");
var bcrypt=require('bcrypt');

const url = 'mongodb://127.0.0.1:27017/';

const saltRounds = 10;
/* GET home page. */
router.post('/', function(req, res, next) {
    var responseData={msg:"Success"};
    MongoClient.connect(url,(err,client)=>{
        var db=client.db("test");
        var collection=db.collection("collection");
        collection.find({uid:req.body.uid}).toArray((err,data)=>{
            if(data.lengeh>0){
                responseData.msg="User Aleady Exists";
                responseData.code="Error";
                res.send(JSON.stringify(responseData));
            }else{
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    bcrypt.hash(req.body.pwd, salt, function(err, hash) {
                        req.body.pwd=hash;
                        req.body.rpwd=hash;
                        collection.insertOne(req.body,(err,data)=>{
                            if(err){
                                responseData="Error while inserting data";
                                responseData.code="Error";
                            }else{
                                responseData="Succesfully inserted in mongodb";
                                responseData.code="Successful";
                                res.send(JSON.stringify(responseData));
                                console.log(req.body);
                            }
                        });

                    });
                });
            }
        })
        
    });
});

module.exports = router;
