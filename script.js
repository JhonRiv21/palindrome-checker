const inputElement = document.querySelector('#text-input');
const buttonElement = document.querySelector('#check-btn');
const resultElement = document.querySelector('#result');

const validatePalindrome = () => {
  let input = inputElement.value.trim();

  if (input === '') {
    alert('Please input a value');
    return;
  }

  let original =  input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let reversed = original.split('').reverse().join('');

  if (original === reversed) {
    resultElement.innerText = `${input} is a palindrome`;
  } else {
    resultElement.innerText = `${input} is not a palindrome`;
  }

  inputElement.value = '';
}

buttonElement.addEventListener('click', validatePalindrome)