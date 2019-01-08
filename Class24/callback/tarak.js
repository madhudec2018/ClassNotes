var tarak = {

    retryCount : 0,

    messageDeliveryDone: function(){
        console.log('Message Delivered')
    },

    messageDeliveryError: function(){
     tarak.retryCount++;
     if(tarak.retryCount < 3){
        setTimeout(function(){
            console.log('Retrying because it is not delivered!!');
            tarak.sendMessage("This is a secret message, deliver !!");
         },1000);
     }
    
    },

    sendMessage : function(message,address){
        madhu.deliver(message,address,messageDeliveryDone,messageDeliveryError );
    },

    purchase: function(product, address,successCB,errorCB){
        //take the product, wrap with gift wrap
        //ship to the customer who purchased it

        var purchaseSuccessCB = function(){
            // note in my records, i will update shipping is successfull
            successCB();
        }

        var purchaseErrorCB = function(){
            // he has to update his records that shipping is failed 
            errorCB();
        }
        madhu.deliver('purchasedItem',address,purchaseSuccessCB, purchaseErrorCB);
    }

};

tarak.sendMessage("This is a secret message, deliver !!",'toronto');