// const email = document.getElementById("mail").value; 
// const form = document.getElementById('form');
// const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// email.addEventListener('submit', function(event){
//   event.preventDefault()
// });

// function validateEmail(email){
//   if(reg.test(string(email).toLowerCase())!==true){
//     console.log('Submitted successfully!');
//   } else
//   console.log('Invalid email! \n Please use lowercase!')
// }





const alert = document.querySelector('.alert');
const footer = document.querySelector('.footer')
const submit = document.querySelector('.submit');
const reg = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

submit.addEventListener('click', show);
function show() {
  alert.style.display = 'block';
}

const validateEmail = (email) => {
  if (email.match(reg)) {
    return true;
  }
  return false;
};


submit.addEventListener('click', (event) => {
  const validEmail = document.getElementById('mail').value;
  if (!validateEmail(validEmail)) {
    document.querySelector('.error').innerHTML = 'Invalid email! Please use lowercase letters!';
    event.preventDefault();
  } else {
    document.querySelector('.error').innerHTML = 'Submited Successfully!';
  }
});
