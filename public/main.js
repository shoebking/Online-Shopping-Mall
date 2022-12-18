
var loadPage = (type)=>{
    var url='';
    switch(type){
        case 'login':
            url='templates/login.htm'
            break;
        case 'signup':
            url='templates/signup.htm'
            break;
        case 'frgtpwd':
            url='templates/frgtpwd.htm'
            break;
        case 'produt':
            $("main").empty();
            $("main").append("<div class='logout' onclick='logout()'>Logout</div><ul class='productDetailsContainer'></ul>");
            getProdutDetails();
            break;
        case 'productDetail':
            url='templates/product.htm'
            break;
    }
    if(url){
        $.ajax({
            url:url,
            method:'GET',
            success:(response)=>{
                console.log(response);
                $('main').html(response);
            },
            error:(err)=>{
                console.log('error');
            }
        })
    }
}

var registerDetails=()=>{
    data={};
    data.id=$("#uname").val();
    data.pwd=$("#upwd").val();
    data.rpwd=$("#urpwd").val();
    data.email=$("#uemail").val();
    data.mobile=$("#umobile").val();
    $.ajax({
        url:'/user/newsignup',
        method:'POST',
        data:data,
        datatype:'JSON',
        success:(response)=>{
            console.log(response);
        }
    });
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
    document.querySelector("#qp").style.display='block';

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


$.ajax({
    url:'http://localhost:8081/users/checklogin',
    method:'GET',
    dataType:'JSON',
    success:(data)=>{
        console.log(data);
        if(data.loginCheck==true){
            loadPage('produt');
        }
        else{
            loadPage('login');
        }
    },
    error:(err)=>{
        console.log(err);
    }
});

var logout=()=>{
    $.ajax({
        url:'/user/logout',
        method:'GET',
        dataType:'JSON',
        success:(response)=>{
            loadPage('login');
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

var detail=(event)=>{
    if(document.getElementsByClassName('productDetailsContainer')){
        loadPage('productDetail');
    }
}