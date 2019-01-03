
$(function(){

    $('#displayCustomersContainer').load('displayCustomers.html',function(){
        toastr.info('Display Customer Loaded!!');
        //events 
     
    });

    $('#btnCustomerLoad').click(function(){
       
        loadCustomers();

    });
});



function loadCustomers(){
    //network, form 
    //2005 - AJAX (Asynchronous Javascript and XML)
    //without refresh the whole page
    //XMLHttpRequest
    //fetch
        console.log('first');
    var requestConfig = {
        url: 'http://localhost:8100/customers/',
        method: 'get',
        dataType: 'json',
        timeout: 30000,//10-30 seconds 
        success: function(data){
            //callback function 
            console.log('second');
            fillCustomerData(data);
            $('#displayCustomersContainer').removeClass('hidden').show();
            $('#addCustomerContainer').hide();

            toastr.success('Hurray!! We got the data!!');
        },
        error: function(xhr,status,error){
            toastr.error('Error occurred while fetching customers!!');
        },
        complete: function(){
            toastr.info('Completed');
        }
    };
    
    $.ajax(requestConfig);
    console.log('third');
}


function fillCustomerData(customers){
    var row = '<tr><th scope="row">#customerNumber</th>' +
              '<td>#contactFirstName</td>' +
              '<td>#contactLastName</td>' +
              '<td>#phone</td></tr>';

            
              //customers -- array of objects 
              //array of strings 

        //map 
        $('#customerTable tbody').empty();
        var htmlRecords = customers.map(function(customer){
            return row.replace('#customerNumber',customer.customerNumber)
                      .replace('#contactFirstName',customer.contactFirstName)
                      .replace('#contactLastName',customer.contactLastName)
                      .replace('#phone',customer.phone)
        });

        //htmlRecords == array of strings 
        var allRecords = htmlRecords.join('');
        $('#customerTable tbody').append(allRecords);

}