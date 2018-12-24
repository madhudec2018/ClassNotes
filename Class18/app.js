$(function (){
 
    // $('.task').click(function(){
    //     var text = $(this).text();
    //     console.log('You clicked on '+ text + ' task');
    // })

    //parent //on

    $('#taskContainer').on('click', '.task',function(){
        // attach the event on the parent,
        // it reduces memory
        var text = $(this).text();

        $(this).find('.taskNote').addClass('');
        //taskNote.addClass()
       // var parent =  taskNote.closest('.task');

        var person = {
            age: 0,
            name : '',
            setAge : function(ageValue){
                this.age = ageValue;
                return this;
            },
            getAge : function(){
                return this.age;
            },
            setName : function(nameValue){
                this.name = nameValue;
                return this;
            }
        };

       // var returned = person.setAge(40).setName('John')

        //person.getAge().setName()
       // var text =  taskNote.text();
        
        //.setName('John');
        //
        // taskNote.text(' New Text')
        // taskNote.addClass('newClass')
        // taskNote.addClass('someotherClass')

      //  taskNote.text(' New Text').addClass('newClass').addClass('someotherClass')
        //<span class="taskNote" > Read Jquery book </span> 
        //<span class="taskNote newClass someotherClass" > New Text</span> 
        //var returnedTaskNote = taskNote.text(' New Text').addClass('newClass').addClass('someotherClass');
        
      //  $('<li>').text(taskTextEntered).addClass('task');
        //
        console.log('You clicked on '+ text + ' task');
    });

    //closest // find 


});