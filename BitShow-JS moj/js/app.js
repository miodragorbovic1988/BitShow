import * as data from './data.js';
import * as ui from './ui.js';

const init = () => {
    console.log('App initialized');
    data.fetchData(onSuccessHandler);
    setUpEventListener()
}

const $searchButton = $('.button');
const $searchInput = $('.showInput');

function setUpEventListener() {

    $searchButton.on('click', onSearchHandler);
    // $searchInput.on('click', onSearchHandler);

}

const onSearchHandler = (e) => {
    const searchInput = ui.getInputText()
    data.singleSearchMovie(searchInput, function (shows) {
        for (var i = 0; (i < shows.length && i <= 10); i++) {
            var oneShow = shows[i];
            ui.displaySingleShow(oneShow);
            // console.log(oneShow.show.name);
        }
        // return oneShow;
    })
    // console.log(searchInput);

}


const onSuccessHandler = (allShowData) => {
    for (let i = 0; i < 50; i++) {
        const show = allShowData[i];

        ui.displayShow(show);

    }
};

export { init };