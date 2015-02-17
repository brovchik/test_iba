var loadButton = $('.newsreader-header-toolbar-load-button');
var newsList = new NewsReader.ui.NewsListPanel();
var loadHandler = new NewsReader.Handler();

loadButton.addEventListener('click', loadHandler.addNewsList());