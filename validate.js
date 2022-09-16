const email = document.getElementById("mail").value; 
const form = document.getElementById('form');
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
email.addEventListener('submit', function(event){
  event.preventDefault()
});

function validateEmail(email){
  if(reg.test(string(email).toLowerCase())!==true){
    console.log('Submitted successfully!');
  } else
  console.log('Invalid email! \n Please use lowercase!')
}