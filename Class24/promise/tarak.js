var tarak = {

    retryCount : 0,

   
    sendMessage : function(message,address){
        madhu.deliver(message,address)
             .then(function(){
                console.log('Message delivery successfully');
             })
             .catch(function(){
                console.log('Message is not delivered');
             });
    },

    purchase: function(product, address){
        //madhu.deliver('purchasedItem',address) --> object -- then 

           return  madhu.deliver('purchasedItem',address);
                        
                        //oject -- then
    }

};

tarak.sendMessage("This is a secret message, deliver !!",'toronto');