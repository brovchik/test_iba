var handler = new NewsReader.Handler();
var newsList = [];

function attachEventToLoadButton() {
    $('.newsreader-header-toolbar-load-button').bind('click', handler.renderNewsList);
}

function attachEventToListContainer() {
    $('.list-group').bind('click', handler.selectNews);
}

function attachEventToDeleteButton() {
    $('.newsreader-header-toolbar-delete-button').bind('click', handler.deleteNews);
}



