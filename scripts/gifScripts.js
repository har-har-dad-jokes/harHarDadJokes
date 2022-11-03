const appGif = {};

// Storing the app key into a variable
appGif.key = 'niFzIYdUFzBzGLuxTwDuqNHVcy1quDzv';
// storing the base url into a variable
appGif.baseUrl = 'https://api.giphy.com/v1/gifs/search';

appGif.init = () => {
    // Calling the function that will display dad Gifs only
    appGif.getGifs('dad');
}

//fetch joke data from api, then add data to paragraph in DOM
    appGif.getGifs = (inqury) => {
    const url = new URL(appGif.baseUrl);

    // add our search params to the base url
    url.search = new URLSearchParams ({
        api_key: appGif.key,
        q: inqury, 
        limit: 1,
        offset: Math.floor(Math.random() * 50)
    
    });

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(res => {
        // appGif.displayGif(res.data);
        console.log(res.data);
    });
}


appGif.init();