var getDatas = ()=>{
    data={};
    data.name=$("#uname").val();
    data.pwd=$("#upwd").val();
    data.rpwd=$("#urpwd").val();
    console.log(data);
    try{
        if(data.name==''){
            throw 'nameerr';
        }
        else{
            document.querySelector("#uname_err").style.display='none';
        }
        if(data.pwd!=data.rpwd){
            throw 'pwderr'
        }
        else{
            document.querySelector("#upwd_err").style.display='none';
        }
    }
    catch(error){
        switch(error){
            case 'nameerr' :
                document.querySelector("#uname_err").style.display='block';
                break;
            case 'pwderr' :
                document.querySelector("#upwd_err").style.display='block';
                break;
        }
    }
    
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