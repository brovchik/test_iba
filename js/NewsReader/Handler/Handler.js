NewsReader.Handler = function() {

}

NewsReader.Handler.prototype = {

    addNewsList: function() {
        var newsListProvider = new NewsReader.data.NewsServiceProvider('/data');
        newsListProvider.getNewsHeadlines();
    }

}