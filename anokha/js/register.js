function NameCheck() 
{
    var x = document.getElementById("tname1").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}

function cnameCheck() 
{
    var x = document.getElementById("college").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}

function validatePassword() {
    var pass = document.getElementById("psw").value;
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(pass.match(re)){
        return true;
    }
    else{
        alert("Invalid password format");
        return false;
    }
  }

function phoneCheck()
{
    var x = document.getElementById("contact").value;
    if(x.length()<10)
    {
        alert("Not a valid number")
    }
}

function placeCheck() 
{
    var x = document.getElementById("place").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}

function stateCheck() 
{
    var x = document.getElementById("state").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) 
    {
        if (y.includes(sp[i])) 
        {
            alert("Please Remove special characters")
        }
    }
}

function regISTER()
{
    alert("Your team has been Registered!!");
}

function chkEmail()
{
    var u = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(u.match(validRegex))
    {
        return true;
    }
    else
    {
        alert("Invalid email address!");
        return false;
    }
}

function validateRepeatPassword(){
    var pass = document.getElementById("psw").value;
    var rpass = document.getElementById("psw-repeat").value;
    if (pass === rpass) {
        return true;
    } else {
        alert("Password not matching");
        return false;
    }
    
}


