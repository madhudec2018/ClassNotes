
//DOM API

//Document object model 

//API (Application Programming Interface) --> 
//console.log
//set of methods or available functions available to you 

//id
var mainTitleElement =  document.getElementById('mainTitle');
mainTitleElement.style.color = 'green';

//
var h1Elements = document.getElementsByTagName('h1');
//array[0]
//array[1]
//[1,2,3]
//0


for(var i = 0; i < h1Elements.length; i++ ){
    var element = h1Elements[i];
    if( element.innerText === 'Second H1'){
        element.style.color = 'red';
    }
}


var superManElements = document.getElementsByClassName('superMan');
for(var j = 0; j < superManElements.length; j++ ){
    var el = superManElements[j];
    el.style.backgroundColor = 'yellow';
}
//cross browsers issues 