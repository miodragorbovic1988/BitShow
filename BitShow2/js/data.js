import ShowMovie from './entities.js';

const fetchPopularShows = (f) => { //funkcija transformedShows kao parametar ove funkcije (f=transformedShows).
    const request = $.ajax({
        url: "http://api.tvmaze.com/shows",

    });

    request.done(function (shows) {
        shows.sort((current, next) => (
            next.rating.average - current.rating.average
        )); //sortiranje niza objekata po parametru average

        const bestRatingMovies = shows.slice(0, 50); //odsecanje niza

        // create show objects
        const transformedShows = [];
        for (let i = 0; i < bestRatingMovies.length; i++) {
            const shows = bestRatingMovies[i];
            const { name, image } = transformedShows;

            const transformed = new ShowMovie(name, image);
            transformedShows.push(transformed);
        }

        f(transformedShows); //prosledjujemo je kao parametar funkcije na kraju();


    });
};

export { fetchPopularShows };



//     }

//     // for(let j=0; j<data[i].length; j++) {

//     // }
// }








// const BASE_ENDPOINT = "http://api.tvmaze.com/shows";

// const movieOnLoad = (searchInput, onSuccess) => {
//     const requestUrl = BASE_ENDPOINT + searchInput;

//     $.ajax(requestUrl).done((response) => {
//         console.log("server response onDone", response);

//         const user = new User()

//     })



// }