$(function (){
   // async and call back 
    // $('#mainApp').load('templates/inside.html', function(){
    //     //it is inserted to dom
    //     toastr.info('Html Loaded');
    // });


    //Not working 
    // $('#mainApp').load('templates/inside.html');
    // $('li').click(function(){
    //     toastr.success('li is clicked');
    // });

    //working 
    $('#mainApp').load('templates/inside.html ul#ourContent',function (){
        bindEvents();
    });

    function bindEvents(){
        $('li').click(function(){
            toastr.success('li is clicked');
        });
    }
});