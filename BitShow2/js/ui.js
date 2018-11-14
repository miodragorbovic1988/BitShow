let $searchButton = $('.searchButton');
let $input = $('.searchInput');
let $searchInput = $input.val();


let $movieDiv = $('<div>');
let $singleMovie = $movieDiv.append('#listOfMovies');


export {
    $searchButton,
    $searchInput,
    $singleMovie
}