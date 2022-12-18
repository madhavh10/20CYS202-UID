function myFunction() 
{
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Id") {
        x.innerHTML = "Your Team Id is 101";
    } 
    else 
    {
        x.innerHTML = "Id";
    }
}

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
        alert("Valid email address!");
        return true;
    }
    else
    {
        alert("Invalid email address!");
        return false;
    }
}


