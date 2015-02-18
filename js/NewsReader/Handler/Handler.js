NewsReader.Handler = function() {

}

NewsReader.Handler.prototype = {

    renderNewsList: function() {
        var newsListPanel = new NewsReader.ui.NewsListPanel();
        var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');
        var newsContentPanel = new NewsReader.ui.NewsContentPanel();
        newsListPanel.el = $('.newsreader-list-container');
        newsContentPanel.el = $('.newsreader-content-panel');
        newsServiceProvider.getNewsHeadlines(newsListPanel.renderNewsHeadlines, newsListPanel);
        newsServiceProvider.getNewsContent(1, newsContentPanel.renderNewsContent, newsContentPanel);
        setTimeout(newsListPanel.selectNews(1), 0);
    }
}