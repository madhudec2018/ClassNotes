$(function(){

    $('#addCustomerContainer').load('addCustomer.html',function(){
        toastr.info('Add  Customer Loaded!!');
        
        $('#addCustomerContainer #saveButton').click(function(){
           
            // 1) prepare data 
            // 2) make ajax request 
           var customerData =   prepareData();
           //ajax post 
           saveCustomer(customerData);
            //ev.preventDefault();
            //by default form has a behavior of doing some thing
            // get request or post request but it will refresh the whole page 
            //ev.stopPropogation();
            return false;
        });

    });

    function saveCustomer(customerData){
        var requestConfig = {
            url: 'http://localhost:8100/customers/',
            method: 'post',
            dataType: 'json',
            data : customerData,
            timeout: 30000,//10-30 seconds 
            success: function(data){
                toastr.success('Hurray!! Customer is Added ');
                $('#btnCustomerLoad').trigger('click');
            },
            error: function(xhr,status,error){
                toastr.error('Error occurred while saving customer, Please retry later!!');
            },
            complete: function(){
                toastr.info('Completed');
            }
        };
        
        $.ajax(requestConfig);
    }

    $('#btnAddCustomer').click(function(){
        
        $('#displayCustomersContainer').hide();
        $('#addCustomerContainer').removeClass('hidden').show();
        clearForm();

    });

    function clearForm(){
        $('#lastNameInput').val(''),
        $('#firstNameInput').val(''),
        $('#phoneInput').val(''),
        $('#addressCityOneInput').val(''),
        $('#cityInput').val(''),
        $('#stateInput').val(''),
        $('#postalCodeInput').val(''),
        $('#countryInput').val(''),
        $('#creditLimit').val('')
    }

    function prepareData(){

        var customer = {
            lastName: $('#lastNameInput').val(),
            firstName: $('#firstNameInput').val(),
            phone: $('#phoneInput').val(),
            addressLine1: $('#addressCityOneInput').val(),
            city: $('#cityInput').val(),
            state: $('#stateInput').val(),
            postalCode: $('#postalCodeInput').val(),
            country: $('#countryInput').val(),
            creditLimit: $('#creditLimit').val()
            
        };

        return customer;


    }
    // lastName,
    // firstName,
    // phone,
    // addressLine1,
    // addressLine2,
    // city,
    // state,
    // postalCode,
    // country,
      // creditLimit
});