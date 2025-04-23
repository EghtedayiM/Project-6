let a = 0;
const valueElement = document.getElementById('value');

function changeValue(amount) {
    a += amount;
    valueElement.textContent = a;
}