var button = document.getElementById("button");
var account = document.getElementById("account_input");
var password = document.getElementById("password_input");
var go_to_page = document.getElementsByClassName("swal-button--confirm");


function getValue(value_type){
    return value_type.value;
}
var data = {
    'E24086373':'Maple510051',
    'dog':'cat'
}

button.addEventListener("click", function(){
    var isExist = false;
    if(getValue(account) in data){
        if(data[getValue(account)] == getValue(password)){
            isExist = true;
        }
    }
    if(isExist){
        swal({
            title:"Login success!!",
            icon:"success",
            buttons:{
                confirm: {
                    text: "Login Success",
                    visible: true,
                    
                }
            }
        });
        setTimeout(window.open("https://www.w3schools.com"),5000)
        
    }else{
        swal({
            title:"Your account or password is wrong!!",
            icon:"error",
            buttons:{
                cancel: {
                    text: "Try again",
                    visible: true
                }
            }
        });
    }
    
})
