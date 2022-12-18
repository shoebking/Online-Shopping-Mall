var express = require('express');
var router = express.Router();
var {MongoClient}=require("mongodb");
const url = 'mongodb://127.0.0.1:27017/';


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.isUserLoogedin);
  var productData={
    "pData" :[]
}
    MongoClient.connect(url,(err,client)=>{
        var db=client.db("test");
        var collection=db.collection('WebApp');
        collection.find({}).toArray((error,data)=>{
            productData.pData=data;
            productData=JSON.stringify(productData);
            res.send(productData);
        })
    })
});

module.exports = router;