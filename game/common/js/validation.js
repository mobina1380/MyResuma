function Invalid(Item,msg) {
    Item.style.borderBottom = "1px solid #f44336"
    document.getElementById(Item.id+"_error").innerText = msg
    document.getElementById(Item.id+"_error").classList.add("error-text")
}
function valid(Item) {
    Item.style.borderBottom = "1px solid #CCC"
    document.getElementById(Item.id+"_error").innerText = ""
    document.getElementById(Item.id+"_error").classList.remove("error-text")
}
function requiredFiled(Item) {
    var myVal = Item.value ;

    if(myVal.length == 0){
       Invalid(Item,"plz Fill This Filed!");
       return false ;
    }
    else{
       valid(Item);
       return true;
    }
}
function checkNumber(Item) {
    var myVal = Item.value ;
    if(isNaN(myVal)){
      Invalid(Item,"plz Enter a Number!")
        return false
    }
    else{
      valid(Item)
        return true;
    }
}

document.getElementById("input3").onfocus = function () {

     if(document.getElementById("input3").value == "") {
         this.setAttribute("value", "+98-")
     }
}
function checkMobile(Item) {

   var myVal = Item.value ;
   var divider = myVal.split("-")


   if(divider[1].substr(0,2) != "09" || divider[1].length != 11 || isNaN(divider[1])){
       Invalid(Item,"Invalid Mobile Format")
       return false ;
   }
   else{
       valid(Item)
       return true;
   }
}




function formValidation(Item) {
    var fncValidate = Item.getAttribute("data-validation-role")
    // console.log(fncValidate)

    var arrValidate = fncValidate.split(",");
    var flag = true;
    for(var i=0;i<arrValidate.length;i++){

        if(flag) {
            switch (arrValidate[i]) {
                case "required":
                    flag = requiredFiled(Item)
                    break;
                case "checkNumber":
                    flag = checkNumber(Item);
                    break;
                case "checkMobile":
                    flag = checkMobile(Item)
                    break;

            }
        }else{
            break;
        }
    }

}

