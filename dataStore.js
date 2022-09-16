const names = document.getElementById('name');
const emails = document.getElementById('mail');
const msg = document.getElementById('text');
const form = document.querySelector('form');
const body = document.querySelector('body');

const retrieveData = localStorage.getItem('user');

body.onload = () => {
  if (retrieveData) {
    const store = JSON.parse(retrieveData);
    names.value = store.name;
    emails.value = store.email;
    msg.value = store.message;
  }
};

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();

    const nameData = document.getElementById('name').value;
    const emailData = document.getElementById('mail').value;
    const messageData = document.getElementById('text').value;
