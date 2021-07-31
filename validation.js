function nameValid(){
    var name = $("#inputName").val();
    var reference = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;

    if(name === "")
    {
        $("#namestatus").html("This field cannot be empty.");
        return false;
    }
    else if(name.endsWith(" "))
    {
       $("#namestatus").html("Name cannot end with space");
        return false;
    }
    else if(reference.test(name))
    {
        $("#namestatus").html("");
        return true;
    }
    
    else{
        $("#namestatus").html("Only Letters are allowed.");
        return false;
    }
}

function emailValid() {
    var emailfield = $("#inputEmail4").val();
    var reference = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if(emailfield === "")
    {
        $("#emailstatus").html("This field cannot be empty.");
        return false;
    }
    else if(reference.test(emailfield))
    {
        $("#emailstatus").html("");
        return true;
    }
    else{
        $("#emailstatus").html("Enter email in correct format.");
        return false;
    }
}

function phoneValid() {
    var phone = $("#inputNumber").val();
    var reference = /^\d+$/;

    if(phone === "")
    {
        $("#phonestatus").html("This field cannot be empty.");
        return false;
    }
    else if(reference.test(phone))
    {
        if(phone.length == 10)
        {
            $("#phonestatus").html("");
            return true;
        }
        else if(phone.length<10 )
        {
            $("#phonestatus").html("Number should not be less than 10 numbers");
            return false;
        }
        else{
            $("#phonestatus").html("Number should not be greater than 10 numbers");
            return false; 
        }
    }
    else{
        $("#phonestatus").html("Only numbers are allowed.");
        return false;
    }
}


function placeValid() {
    var place = $("#inputPlace").val();
    var reference = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;

    if(place === "")
    {
        $("#placeStatus").html("This field cannot be empty.");
        return false;
    }
    else if(reference.test(place))
    {
        $("#placeStatus").html("");
        return true;
    }
    else{
        $("#placeStatus").html("Only Letters are allowed.");
        return false;
    }
}

function messageValid() {
    var name = $("#inputMessage").val();
    var reference = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;

    if(name === "")
    {
        $("#messagestatus").html("This field cannot be empty.");
        return false;
    }
    else if(name.length<10){
        $("#messagestatus").html("Enter minimum ten letters.");
        return false;   
    }
    
    else{
        $("#messagestatus").html("");
        return true;
    }
}

$("#inputName").on('keyup',function (){
        nameValid();
})


$("#inputEmail4").on('keyup',function () {
        emailValid();
})


$("#inputNumber").on('keyup',function () {
    
    phoneValid();
})

$("#inputPlace").on('keyup',function () {
    placeValid();  
})


$("#inputMessage").on('keyup',function () {
   messageValid();
})





