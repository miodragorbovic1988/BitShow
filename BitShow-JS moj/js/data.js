const LIST_OF_ALL_SHOWS_ENDPOINT = 'http://api.tvmaze.com/shows';
const LIST_OF_SOLO_SHOW_ENDPOINT = 'http://api.tvmaze.com/search/shows?q=';

// console.log(requestSolo);
const singleSearchMovie = (searchInputValue, onSearchHandler) => {
    console.log(searchInputValue)
    const requestSolo = `${LIST_OF_SOLO_SHOW_ENDPOINT}${searchInputValue}`;
    console.log(requestSolo);
    const soloRequest = $.ajax({
        url: requestSolo,
        method: 'GET'
    });
    soloRequest.done(function (soloSearchedMovie) {//api response [shows];
        onSearchHandler(soloSearchedMovie);

        // console.log(soloSearchedMovie);

    })
}



const fetchData = (onSuccessHandler) => {

    const request = $.ajax({
        url: LIST_OF_ALL_SHOWS_ENDPOINT,
        method: 'GET'
    });

    request.done(function (allShowData) {
        allShowData.sort(function (current, next) {
            if (current.rating.average < next.rating.average) {
                return 1;
            }
            if (current.rating.average > next.rating.average) {
                return -1
            }
            return 0;
        });

        onSuccessHandler(allShowData);
        // console.log(allShowData);
    });

    request.fail(function (jqxhr, textStatus) {
        alert('Request failed: ' + textStatus)
    });

}



export { fetchData, singleSearchMovie };