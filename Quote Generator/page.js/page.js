
document.addEventListener("DOMContentLoaded", function() {
    const api_url = "https://api.quotable.io/random";

    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const button3 = document.getElementById("button3");
    

    async function getquote(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
        console.log(quote);

    }

    button3.onclick = function() {
        getquote(api_url);
    };
    
    getquote(api_url);
});

 


      