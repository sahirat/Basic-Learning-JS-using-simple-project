const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const para = document.getElementById('para');
var i = 0;

btn1.addEventListener('click', increaseCount);
function increaseCount() {
    para.innerHTML = i++;
}
btn2.addEventListener('click', lowerCount);
function lowerCount() {
    para.innerHTML = i--;
}