let popreserva = document.getElementById("popup");

function validate()
{
var fname = document.forms["myformreserva"]["fname"].value;
var lname = document.forms["myformreserva"]["lname"].value;
var email = document.forms["myformreserva"]["email"].value;
var phone = document.forms["myformreserva"]["phone"].value;
var date = document.forms["myformreserva"]["date"].value;
/*var times = document.forms["myform"]["times"].value;
var timef = document.forms["myform"]["timef"].value;*/

if (fname == "")
    { alert("Por favor completar el campo Nombre");}
else if(lname == "")
    {alert("Por favor completar el campo Apellido");}
else if (email == "")
    {alert("Por favor completar el campo e-mail");}
else if (phone == "")
    {alert("Por favor completar el campo Teléfono");}
else if (date == "")
    {alert("Por favor completar el campo Fecha");}
/*else if (times == "")
    {alert("Por favor completar el Horario Inicio");}
else if (timef == "")
    {alert("Por favor completar el Horario Fin");}*/
 
else 
    { popreserva.classList.add("open-popup");}
}


function closepopupreserva() 
{
    popreserva.classList.remove("open-popup");
 
}