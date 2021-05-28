//  let , const and var any one can be used but for differences check out youtube...
//  The document.createElement() creates a new HTML element.
//  The element.appendChild() appends an HTML element to an existing element.

    
    function App(){
        const mainDiv = document.createElement('div');  // create DIV element
            mainDiv.classList = 'container'; // Add class to DIV
            const heading = document.createElement('h1');  // create h1 element
            heading.textContent = "Learn Javascript with Deep and Easy learning";  // Add textContent in h1
           
        mainDiv.appendChild(heading); // adding h1 child to div 
        mainDiv.innerHTML += "<h5>  - by Sahil <h5>"  // another heading in same div but with innerHTML use 
        document.body.appendChild(mainDiv); // Adding div to Body of HTML
        }
 App();
