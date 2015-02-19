var handler = new NewsReader.Handler();

function attachEventToLoadButton() {
    $('.newsreader-header-toolbar-load-button').bind('click', handler.renderNewsList);
}

function attachEventToListContainer() {
    $('.list-group').bind('click', handler.selectNews);
}



