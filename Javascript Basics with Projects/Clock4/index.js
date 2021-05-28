const mainDiv = document.createElement('div');
mainDiv.classList = 'container';
const h1 = document.createElement('h1');
setInterval(display, 1000); // this function delays the time by 1sec so that we see the time like dynamic 1sec=1000
function display() {
    var date = new Date();  // Date objects 
    var time = date.toLocaleTimeString(); // function of date objects
    h1.innerHTML = time;
}
mainDiv.appendChild(h1);
document.body.appendChild(mainDiv);