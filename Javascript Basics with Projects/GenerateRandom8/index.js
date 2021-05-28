const btn = document.getElementById('btn1');
btn.addEventListener('click', generate);
const input = document.getElementById('str');
const para = document.getElementById('para');
function generate() {
    let inp = input.value;
    if (inp == 1) {
        let number = Math.floor(Math.random() * 10);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 2)
    {
        let number = Math.floor(Math.random() * 100);
        para.innerHTML = `<h1>${number}</h1>`
     
    }
    else if (inp == 3)
    {
        let number = Math.floor(Math.random() * 1000);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 4)
    {
        let number = Math.floor(Math.random() * 10000);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 5)
    {
        let number = Math.floor(Math.random() * 100000);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 6)
    {
      let number = Math.floor(Math.random() * 1000000);
        para.innerHTML = `<h1>${number}</h1>`    
    }
    else if (inp == 7) {
        let number = Math.floor(Math.random() * 10000000);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 8) {
        let number = Math.floor(Math.random() * 100000000);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 9) {
        let number = Math.floor(Math.random() * 1000000000);
        para.innerHTML = `<h1>${number}</h1>`
    }
    else if (inp == 10) {
        let number = Math.floor(Math.random() * 10000000000);
        para.innerHTML = `<h1>${number}</h1>`
    }
   
}