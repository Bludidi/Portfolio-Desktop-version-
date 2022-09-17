const alert = document.querySelector('.alert');
const submit = document.querySelector('.submit');
const reg = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

function show() {
  alert.style.display = 'block';
}
submit.addEventListener('click', show);

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
