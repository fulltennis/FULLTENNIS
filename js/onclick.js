let popupA = document.getElementById("popup");


function required()
{
var fname = document.forms["myform"]["fname"].value;
var lname = document.forms["myform"]["lname"].value;
var email = document.forms["myform"]["email"].value;
var phone = document.forms["myform"]["phone"].value;
var date = document.forms["myform"]["date"].value;
var times = document.forms["myform"]["times"].value;
var timef = document.forms["myform"]["timef"].value;

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
{

    popupA.classList.add("open-popup");
    var map = document.getElementById("mapacanchas");
    var foto=document.getElementById("fotocanchas");
    var formu=document.getElementById("formu");
    var titu=document.getElementById("titreserva");
    var benviar=document.getElementById("benviar");
    map.style.visibility = "hidden";
    formu.style.visibility = "hidden";
    titu.style.visibility = "hidden";
    benviar.style.visibility = "hidden";
    foto.style.visibility= "hidden";
    
}
}

function closepopup()
{
    popupA.classList.remove("open-popup");
    var map = document.getElementById("mapacanchas");
    var foto = document.getElementById("fotocanchas");
    var formu=document.getElementById("formu");
    var titu=document.getElementById("titreserva");
    var benviar=document.getElementById("benviar");
    map.style.visibility = "visible";
    formu.style.visibility = "visible";
    titu.style.visibility = "visible";
    benviar.style.visibility = "visible";
    foto.style.visibility= "visible";
    
}




/*
function openpopup()
{
    popupA.classList.add("open-popup");
    var map = document.getElementById("mapacanchas");
    var foto=document.getElementById("fotocanchas");
    var formu=document.getElementById("formu");
    var titu=document.getElementById("titreserva");
    map.style.visibility = "hidden";
    formu.style.visibility = "hidden";
    titu.style.visibility = "hidden";
    foto.style.opacity= "0.2";
    
}

function closepopup()
{
    popupA.classList.remove("open-popup");
    var map = document.getElementById("mapacanchas");
    var foto = document.getElementById("fotocanchas");
    var formu=document.getElementById("formu");
    var titu=document.getElementById("titreserva");
    map.style.visibility = "visible";
    formu.style.visibility = "visible";
    titu.style.visibility = "visible";
    foto.style.opacity = "1";
    
}*/