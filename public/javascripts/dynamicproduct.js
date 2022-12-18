var productDetails = [];

var createproductdetails=(pData)=>{
    var template = Handlebars.compile($("#productTemplate").html());
    $(".productDetailsContainer").append(template(pData));
}
//http://localhost:8081/data/prod

function getProdutDetails(pData){
    $.ajax({
        url : 'http://localhost:8081/data/prod',
        dataType : 'JSON',
        method : 'GET',
        data :{},
        success : (response)=>{
            console.log("successfull");
            productDetails = response.pData;
            loadData();
        },
        error : ()=>{
            console.log("ERROR")
        }

    })
}

function loadData() {

    for (var i = 0 ; i < productDetails.length; i++) {
        createproductdetails(productDetails[i]);
    }
}