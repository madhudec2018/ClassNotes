$(document).ready(function(){
    newtask();
    next();
    previous();
    slideshow();
});

var elem = $("#button");
var x = $("#button").offset().left;
var y = $("#button").offset().top;

function newtask() {
    $('#button').click(function(){
        $('#button').offset(function(n,b){
        var loc = new Object();
        loc.top = b.top+10;
        return loc;
        });
    });
    $('#btn').click(function(){
        $('#button').offset({top: y});
    });
}

    var images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    var i=images.length-1;
    function previous(){
    $(".btn.previous").click(function() {
        i--;
        if (i<0) {
            i=images.length-1;  
        }
        $(".pic").attr("src", images[i]);
    });
}

    var images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    var i=0;
    function next(){
    $(".btn.next").click(function() {
        i++;
        if (i>images.length-1) {
            i=0;  
        }
        $(".pic").attr("src", images[i]);
    });
}

function slide() {
    i++;
        if (i>images.length-1) {
            i=0;  
        }
        $(".pic").attr("src", images[i]);
}

function slideshow(){
$(".btn.slideshow").click(function() {
        stop = setInterval(function() {
            slide(); 
        }, 3000);
    });

$(".btn.slidestop").click(function pause_slideshow()
{
 clearInterval(stop);
});
}