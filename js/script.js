let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
} 

function showSuccessAlert(){
  var name = document.getElementById('fname')
  var lastName = document.getElementById('lname')
  var email = document.getElementById('email')


  alert('Has enviado el formulario con exito los datos: \n' +
   'Nombre: ' + name.value + '\n Apellido: ' + lastName.value + '\n Email: ' + email.value)
}

function validate() {
  
  var showData;

  if( document.myForm.name.value == "" ) {
     alert( "Ingrese su nombre!" );
     document.myForm.name.focus() ;
     showData = false;
  }
  if( document.myForm.lastName.value == "" ) {
     alert( "Ingrese su apellido!" );
     document.myForm.lastName.focus() ;
     showData = false;
  }
  if( document.myForm.email.value == "" ) {
    alert( "Ingrese su email!" );
    document.myForm.email.focus() ;
    showData = false;
 }
  // if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
  //    document.myForm.Zip.value.length != 5 ) {
     
  //    alert( "Please provide a zip in the format #####." );
  //    document.myForm.Zip.focus() ;
  //    showData = false;
  // }
  // if( document.myForm.Country.value == "-1" ) {
  //    alert( "Please provide your country!" );
  //    showData = false;
  // }
  else{
    showData = true
  }

  if(showData){
    showSuccessAlert()
  }

  return showData;
}