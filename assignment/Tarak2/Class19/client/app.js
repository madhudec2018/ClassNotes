
$(function(){

    $('#btnActorLoad').click(function(){
        loadActors();
    })
    function loadActors(){

            console.log('first');
        var requestConfig = {
            url: 'http://localhost:8100/actors/',
            method: 'get',
            dataType: 'json',
            timeout: 30000,
            success: function(data){
                
                console.log('second');
                fillActorData(data);
                toastr.success('Hurray!! We got the data!!');
            },
            error: function(xhr,status,error){
                toastr.error('Error occurred while fetching Actors!!');
            },
            complete: function(){
                toastr.info('Completed');
            }
        };
        
        $.ajax(requestConfig);
        console.log('third');
    }


    function fillActorData(actors){
        var list = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="#imageUrl" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">#firstName</h5>
          <p class="card-text">#age</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    
    var htmlRecords = actors.map(function(actor){
        return list.replace('#imageUrl',actor.imageUrl)
                  .replace('#firstName',actor.firstName)
                  .replace('#age',actor.age)
        
    });
   var allRecords = htmlRecords.join('');
   $('#actors').append(allRecords);
}




});
    

