const app = {};

app.baseUrl = 'https://icanhazdadjoke.com/';

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

app.init = () => {
    app.getJokes();
}

app.init();

app.populateJokeContent = (dad) => {
    // Query select jokeContent in the event listener
    const dadJoke = dad.joke
    console.log(dad.joke);
     app.paragraph = document.querySelector('.jokeContent');
    
    app.paragraph.textContent = dadJoke

    


    
     
     
}

app.button = document.querySelector('.buttonGenerator');
// listen for the click on buttonGenerator
app.button.addEventListener('click', app.populateJokeContent);
    
   
   
    


// need to target the jokeContent paragraph when the button is clicked