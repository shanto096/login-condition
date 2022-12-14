const email = document.getElementById("input-email");
const password = document.getElementById("input-password");
const submit = document.getElementById("submit")

const outputEmail = document.getElementById("output-email");
const outputPassword = document.getElementById("output-password");
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


submit.addEventListener('click',function () {


  const loginEmail = 'shanto@gmail.com'
  const loginPassword ='12345'



if (email.value.match(filter)) {
  alert('conform')
} else{
alert('plase Enter your Email')
}


if(loginEmail === email.value && loginPassword === password.value){
outputEmail.innerText = email.value;
outputPassword.innerText = password.value;
window.location.href ="card.html"
}



 if (loginEmail !== email.value || loginPassword.value) {
   outputEmail.innerText = "Invalid Email"
}
 if (loginPassword !== password.value || loginEmail.value) {
      outputPassword.innerText = "Invalid password"
}


else{
outputEmail.innerText = "Enter your Right Email"
outputPassword.innerText = "Enter your Right password"
}


email.value =""
password.value =""
})
