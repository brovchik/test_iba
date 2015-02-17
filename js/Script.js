function attachEvents() {
    var handler = new NewsReader.Handler();
    $('.newsreader-header-toolbar-load-button').bind('click', handler.addN);
}

function renderNewsList() {
    var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');
    console.log(newsServiceProvider);
    newsServiceProvider.getNewsHeadlines(newsListObject.callbackNewsList, 10);
}

newsListObject = {

    callbackNewsList: function (scope, headlines){
        var h = headlines;
        //var listItems = new NewsReader.data.NewsHeadline();
        console.log(h);
        //listItems.renderNewsHeadlines(headlines);
    }

}


