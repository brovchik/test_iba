NewsReader.Handler = function() {
    addNewsList: function() {

        debugger;
        var newsListProvider = new NewsReader.data.NewsServiceProvider('/data');
        console.log(newsListProvider);
    }
}
