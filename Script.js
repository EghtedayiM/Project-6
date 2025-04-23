let a = 0;
const valueElement = document.getElementById('value');

//srequired function
function changeValue(amount) {
    a += amount;
    valueElement.textContent = a;
}