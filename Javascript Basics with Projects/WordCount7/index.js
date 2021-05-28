const input = document.getElementById('str');
const outDiv = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', findLength);
function findLength() {
    let value = input.value;
    let length = value.length;
    outDiv.innerHTML = `<h1>${length}</h1>`;
}