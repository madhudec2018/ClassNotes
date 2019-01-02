/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */

$(function(){

    $('#btnCustomerLoad').click(function(){
       // loadCustomers();
        //chandrakanth called this 
        //var customers = getCustomers();
        //console.log(customers); //undefined 


        var successFunction = function(mydata){
            console.log(mydata); 
        }

        getCustomers(successFunction);

        //call back functions 

        //two ways 
        //call back function 
        //promises 
    })

    //forloop
  
    function getCustomers(successCB){
        var cust; //undefined 
        var requestConfig = {
                url: 'http://localhost:8100/customers/',
                method: 'get',
                dataType: 'json',
                timeout: 30000,//10-30 seconds 
                success: function(data){
                    console.log('Success  came ');
                   //cust = data;
                   //if sfn is a function, then call it
                   //CALL BACK -->CALL ME BACK WHEN DATA IS THERE 
                   successCB(data);
                },
                error: function(xhr,status,error){
                    console.log('Error  came ');
                },
                complete: function(){
                    console.log('complete  came ');
                }
         };
        // 5 seconds 
        console.log('before ajax call ');
        //sychronous line by line 
        $.ajax(requestConfig); //network request (service or server call ) //asynchronous 
        console.log('after ajax call');
       // return cust;
    }


    // function loadCustomers(){
    //     //network, form 
    //     //2005 - AJAX (Asynchronous Javascript and XML)
    //     //without refresh the whole page
    //     //XMLHttpRequest
    //     //fetch
    //         console.log('first');
    //     var requestConfig = {
    //         url: 'http://localhost:8100/customers/',
    //         method: 'get',
    //         dataType: 'json',
    //         timeout: 30000,//10-30 seconds 
    //         success: function(data){
    //             //callback function 
    //             console.log('second');
    //             fillCustomerData(data);
    //             toastr.success('Hurray!! We got the data!!');
    //         },
    //         error: function(xhr,status,error){
    //             toastr.error('Error occurred while fetching customers!!');
    //         },
    //         complete: function(){
    //             toastr.info('Completed');
    //         }
    //     };
        
    //     $.ajax(requestConfig);
    //     console.log('third');
    // }


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


});