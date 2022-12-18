var getData = ()=>{
    data={};
    data.name=$("#uname").val();
    data.pwd=$("#upwd").val();
   // console.log(data);
    try{
        if(data.name==''){
            throw 'nameerr';
        }
        else{
            document.querySelector("#uname_err").style.display='none';
        }
    }
    catch(error){
        switch(error){
            case 'nameerr' :
                document.querySelector("#uname_err").style.display='block';
                break;
        }
    }
    $.ajax({
        url :'http://localhost:8081/validate/data/login',
        method:'POST',
        data:data,
        dataType:'JSON',
        success:(res)=>{
            //console.log(res);
            if(res.msg=='Valid'){
                loadPage('produt');
            }
            else{
                $("#errBlockLogin").html("Invalid Credentials");
            }
            
        },
        error:(err)=>{
            console.log('ERROR');
        }
    })
    document.querySelector(".singleProduct").style.display='block';
    
}
var validatepwd=(event)=>{
    var charlength=document.querySelector("#upwd").value.length;
    if(charlength<8){
        document.querySelector("#upwd_validate").style.display='block';
    }
    else{
        document.querySelector("#upwd_validate").style.display='none';
    }
}