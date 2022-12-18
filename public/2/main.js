var loadPage = (type) => {
    var url = '';
    switch(type) {
        case 'login1':
            url = 'templetes/login1.htm';
            break;
        case 'frgt_pwd':
            url = 'templetes/frgt_pwd.htm';
            break;
        case 'newsingup':
            url = 'templetes/newsignup.htm';
            break;
        case 'product':
            $("main").html("<b>Products about tobe shown...</b>");
            break;
    }
    if (url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: (response) => {
                console.log("Response is");
                console.log(response);
                $("main").html(response);
            },
            error: (err) => {
                console.log('error');
            }
        });
    }
}

loadPage('login1');