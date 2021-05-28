const para = document.getElementById('para');
const btn = document.getElementById('btn');
btn.addEventListener('click', generate);

function generate() {

    // this is using Fetch API as it return promise it will accept through then()  otherwise promise will be rejected
    fetch('https://type.fit/api/quotes').then((res) => res.json()).then((data) => {
        var string = data[Math.floor(Math.random() * data.length)].text;
        para.innerHTML =`<p>${string}</p>`
    })
}
