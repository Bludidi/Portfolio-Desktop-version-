const alert = document.querySelector('.alert');
const footer = document.querySelector('.footer');
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
    document.querySelector('.error').innerHTML = 'Invalid email! Please use lowercase!';
    event.preventDefault();
  } else {
    document.querySelector('.error').innerHTML = 'Submited Successfully!';
  }
});
