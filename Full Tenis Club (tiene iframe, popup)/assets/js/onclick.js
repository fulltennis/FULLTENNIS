let popupA = document.getElementById("popup");
let esconder = document.getElementById("hide");


function required()
{

var email = document.forms["myform"]["email_address"].value;

if (email == "")
    { alert("Por favor completar el campo E-mail");}

else
{
    popupA.classList.add("open-popup");

}
}

function closepopup()
{
    popupA.classList.remove("open-popup");
   
    

    
}


              


