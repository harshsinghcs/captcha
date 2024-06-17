const captchaText = document.getElementById('captcha-text');
const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-button');
const message = document.getElementById('message');

function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let text = '';
  for (let i = 0; i < 5; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaText.textContent = text;
}

generateCaptcha(); // Generate initial CAPTCHA

checkButton.addEventListener('click', () => {
  const userValue = userInput.value.toUpperCase();
  if (userValue === captchaText.textContent) {
    message.textContent = 'Success!';
    // Simulate form submission (replace with your actual form submission logic)
    console.log('Form submitted!');
  } else {
    message.textContent = 'Incorrect CAPTCHA. Please try again.';
    generateCaptcha(); // Generate new CAPTCHA on wrong answer
    userInput.value = ''; // Clear user input
  }
});

