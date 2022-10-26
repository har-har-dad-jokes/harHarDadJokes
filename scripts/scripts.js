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
        console.log(res)
    });
}

app.init = () => {
    app.getJokes();
}

app.init();