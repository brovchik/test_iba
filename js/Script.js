/**
 * @type {NewsReader.Handler} Object for event processing
 */
var handler = new NewsReader.Handler();

/**
 *
 * @type {NewsReader.data.NewsHeadline[]} headlines
 */
var newsList = [];


 // Attaching event handlers
function attachEventToLoadButton() {
    $('.newsreader-header-toolbar-load-button').bind('click', handler.renderNewsList);
}

function attachEventToListContainer() {
    $('.list-group').bind('click', handler.selectNews);
}

function attachEventToDeleteButton() {
    $('.newsreader-header-toolbar-delete-button').bind('click', handler.deleteNews);
}



