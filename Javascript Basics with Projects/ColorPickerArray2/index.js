const colors = ['red', 'yellow', 'green', 'blue', 'lightgreen', 'pink', 'purple', 'black'];// Arrays 
const button = document.querySelector('button'); // Another Selector elment
const body = document.querySelector('body');
body.style.backgroundColor = 'black';
button.addEventListener('click', changedColor);// eveents click  and calling
function changedColor() {   //function 
    let index = parseInt(Math.random()* colors.length); 
    body.style.backgroundColor = colors[index];//change the background color on click
    

}