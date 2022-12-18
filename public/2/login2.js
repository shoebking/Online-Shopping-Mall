var loginUser = () => {
    var data = {};
    data.eid = $("#eid").val();
    data.epwd = $("#epwd").val();    


    $.ajax({
        url: 'http://localhost:8081/validate/userdata/login',
        method: 'POST',
        data: data,
        dataType: 'JSON',
        success: (res) => {
            console.log("Success");
            console.log(res);
            if (res.msg == 'Valid') {
                loadPage('product');
            } else {
                $("#errBlockLogin").html("Invalid Credentials");
            }
        },
        error: (err) => {
            console.log("ERROR")
        }
    })

}