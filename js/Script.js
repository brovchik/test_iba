function attachEvents() {
    var handler = new NewsReader.Handler();
    $('.newsreader-header-toolbar-load-button').bind('click', handler.renderNewsList);
}




