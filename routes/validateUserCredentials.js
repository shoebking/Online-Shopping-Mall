var express=require("express");
var router=express.Router();
router.post('/',(request,response)=>{
    //console.log(request.query);
    var responseData={
        msg:""
    }
    if(request.body.eid=="shoeb" && request.body.epwd=="test"){
        responseData.msg="Valid"
    }
    else{
        responseData.msg="Invalid"
    }
    responseData=JSON.stringify(responseData);
    response.send(responseData);
});
module.exports=router;