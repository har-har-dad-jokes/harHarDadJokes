const app = {};

app.baseUrl = 'https://icanhazdadjoke.com/';

//fetch joke data from api, then add data to paragraph in DOM
app.getJokes = () => {
    const url = new URL(app.baseUrl);
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        return response.json();
    })
    .then(res => {
        app.populateJokeContent(res)
    });
}

//function to display fetched joke data inside p tags in DOM
app.populateJokeContent = (dad) => {
    //create variable for dad joke data
    const dadJoke = dad.joke
    //select paragraph from page
    app.paragraph = document.querySelector('.jokeContent');
    //add text from dad joke data inside p tags
    app.paragraph.textContent = dadJoke;  
}

//event listener for user button click
//select button from page
app.button = document.querySelector('.buttonGenerator');
//listen for the click on .buttonGenerator, then call getJokes function to fetch data from api and add data to p tags
app.button.addEventListener('click', app.getJokes);
    
//initialize getJokes function on page load   
app.init = () => {
    app.getJokes();
}

//call init method
app.init();