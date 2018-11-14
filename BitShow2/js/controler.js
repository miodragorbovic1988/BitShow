import * as data from './data.js';
import * as ui from './ui.js';

const $searchButton = $('#searchButton');


const init = () => {
    console.log("app initialized");

    data.fetchPopularShows(naKraju);
}

const naKraju = (bestRatingMoviesFromPopularShows) => {//prosledjujemo kao parametar funkciji fetchPopularShows(naKraju)

    for (let n = 0; n < bestRatingMoviesFromPopularShows.length; n++) {
        $singleMovie.append(bestRatingMoviesFromPopularShows[i]);
    }

}

// $('.searchButton').on('click', function () {
// ui.render(podatak)


export { init }