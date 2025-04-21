const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const validateForm = () => {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  submitBtn.disabled = !isValid;
};

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
  this.reset();
  submitBtn.disabled = true;
});

document.getElementById('colorBtn').addEventListener('click', () => {
  const colors = ['#f0f0f0', '#fce4ec', '#e8f5e9', '#e3f2fd'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
