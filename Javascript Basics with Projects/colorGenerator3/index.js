const btn = document.querySelector('button'); // select button
const body = document.querySelector('body'); // select body
btn.addEventListener('click', colorGenerator);  // call to colorApi function
function colorGenerator() {
    var letters = '0123456789ABCDEF'; // these are the letters which helps in generating hex code
    var color = '#'; // this is default # at starting
    for (var i = 0; i < 6; i++) { // As hex code is of 6 length so this loop run till 6 
        color += letters[Math.floor(Math.random() * 16)];// this will generate color 
    }
    // here we get a colorcode
    body.style.backgroundColor = color;

}