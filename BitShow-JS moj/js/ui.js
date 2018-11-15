const $gallery = $('.row');
const $searchInput = $('input');

const getInputText = () => {
    return $searchInput.val()
}

const displayShow = (show) => {
    const $smallDiv = $('<div>');
    // console.log(show);
    const displayCard = `<img class="card" src = ${show.image.medium} alt = 'card> 
    <p class='cardText'>${show.name}</p> </div>`
    $smallDiv.attr('class', 'card');
    $smallDiv.html(displayCard);
    $gallery.append($smallDiv);
}

const displaySingleShow = (shows) => {
    const $ulList = $('.ulSearch');
    const $liElement = $('<li>');
    $liElement.addClass = "liStyle";
    $liElement.text(`movie ${shows.name}`);
    $ulList.append($liElement);

}



export { displayShow, getInputText, displaySingleShow };