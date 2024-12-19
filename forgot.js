var email= document.getElementById("exampleInputEmail1");
var form = document.getElementById("loginForm");
var emailError = document.getElementById("emailError");





form.addEventListener("submit", function (e) {
    e.preventDefault();
    validation();
    validatePassword();

})


function validation(){
  var regex = /^[a-zA-Z]{3,22}@(yahoo|gmail|hotmail)\.(com|net)$/ ; 
  var text = email.value;
  var result = regex.test(text);

  if(result==true){
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      emailError.classList.add("d-none");

  }
  if(result==false){
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
      emailError.classList.remove("d-none");


  }
  
}