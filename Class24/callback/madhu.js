
var madhu = {

    deliver: function(package,address,successCB,errorCB){

        $.ajax({
            url: address,
            method: 'get',
            data: package,
            success: function(){
                    successCB();
            },
            error: function(){
                errorCB();
            }
        });

        //ship the package
        //ajax
        //$.ajax();
    }
}