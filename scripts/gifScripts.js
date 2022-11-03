// create an empty object for name spacing
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
    // fetch Gif data from api, then add data to an image tag
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(res => {
        appGif.displayGif(res.data);
    });
}

appGif.displayGif = (gifData) => {

    gifData.forEach(gif => {
        //capture the img src url from the data
        const gifSrc = gif.images.original.url;
        const gifAlt = gif.title;

        //get img/alt elements from page
        const image = document.getElementById('gif')
        //update the img src url in the DOM using data.images.original.url
        image.src = gifSrc;
        image.alt = gifAlt;
        //update the alt text in the DOM using title
    })
}

    // event listener for user button click
    // select button from page
    // listen for the button to be clicked and it should generate a random Dad Gif
    app.button.addEventListener('click', function () {
        Math.floor.apply(Math.random() * appGif.getGifs('dad'));
    });



appGif.init();