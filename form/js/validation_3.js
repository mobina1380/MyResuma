$(document).ready(function () {

    $(".card-footer").hide()
    $("[data-validation]").blur(function () {

        if($(this).attr("data-validation").toLowerCase() == "on"){

            $(this).removeClass("is-valid is-invalid")

            var Rules = $(this).attr("data-validation-rule").split(",");
            console.log(Rules)
            var Valid = true ;

          //  Valid = eval($(this).attr("data-validation-rule").toLocaleLowerCase()+"(this)");
            var Items = this ;
            $(Items).next(".invalid-feedback").children("ul").html("")
            $.each(Rules,function(RuleIndex,RuleElement){

                var Msg = eval(RuleElement.toLowerCase()+"(Items)");
    

                Valid = (Msg == true) && Valid ;
                console.log(Valid)
                Valid = eval(RuleElement.toLowerCase()+"(Items)") && Valid;
                if(Msg != true){
                    $(Items).next(".invalid-feedback").children("ul").append("<li>" + Msg + "</li>")

                }


            });

            if(Valid === false){

                $(this).addClass("is-invalid")
            }
           if(Valid === true) {

               $(this).addClass("is-valid")
           }
        }
        else{
            $(".card-footer").html("")
            $(".card-footer").css("display","block").append("<div class='msg-box'><h3 class='lead text-center'>Data validation is Turend Off!</h3></div>").delay(3000).fadeOut(500)

        }
    }).after("<div class='invalid-feedback'><ul class='list-unstyled'></ul></div>");

    function required(Item) {

        var myVal = $(Item).val() ;

        if(myVal.length == 0){
           // $(Item).next(".invalid-feedback").children("ul").append("<li></li>")
          return "please Fill Out This filed" ;
        }

            return true ;

    }

    function checkage(Item) {

        var myVal = $(Item).val()

        //if (myVal.length != 0) {
            if (isNaN(myVal)) {

                return "plz Enter a Valid Password.";

            }
                return true


        }


        /*cheaklength*/
        //For example, if a programmer enters an html file, 3-5 users must enter 3 to 5 characters long.
        //and if the programmer enters in the html file *-3 the user must enter characters less than 3 in length
        // and  if the programmer enters in the html file 3-* the user must enter characters longer than 3
        var min,max;
        function cheaklength(Item) {
            var myVal = $(Item).val()
             var mylength=$("[datalength]").attr("datalength").split("-");
             min=mylength[0];
             max=mylength[1];
             if(min!="*" && max!="*" ){
                if ((myVal.length<min || myVal.length>max) && myVal.length!=0) {
                    return"Please have your password length between "+ min+ "and" + max;
                }

                    return true
            }
                    else if(min=="*" ){
                        if( myVal.length<max){
                                     return true;
                                 }
                                
                                     return "Please enter numbers less than "+max+" in length";
                                 
                    }
                    
                    else if(max=="*" ){
                        if( myVal.length>min){
                            return true;
          
                        }
                        
                            return "Please enter numbers longer than "+min+"in length";
                        
                    }
            }








        //else{
            /*$(Item).addClass("is-invalid")
            $(Item).next(".invalid-feedback").text("Empty")*/
        //}

        // function percent(Item,b) {
        //     var myval=$(Item).val();
        //     if(myval.length>=b[0] && myval.length<=b[1]){
        //         alert("afrain bar to")
        //     }
        //     else{
        //         alert("wrong answer")
        //     }
         
        //    }
         
         
         
     



})

// function cheaklength(Item) {

//     var myVal = $(Item).val()
//      var mylength=$("[datalength]").attr("datalength").split("-");

//     //if (myVal.length != 0) {
//      //  if(mylength!="~"){
//         if ((myVal.length<mylength[0] || myVal.length>mylength[1]) && myVal.length!=0) {

//             return "plz Enter a number  amoung"+ " "+ mylength[0]+ "and" + mylength[1];
         
//         }

//             return true
//     }