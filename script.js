const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy');


const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';


function generatePassword() {
    const length = parseInt(lengthInput.value);
    let characters = '';

    if (uppercaseCheckbox.checked) characters += uppercaseLetters;
    if (lowercaseCheckbox.checked) characters += lowercaseLetters;
    if (numbersCheckbox.checked) characters += numbers;
    if (symbolsCheckbox.checked) characters += symbols;

    if (characters.length === 0) {
        passwordInput.value = "Choose at least one type.";
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
}


function copyToClipboard() {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied!');
}


generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
