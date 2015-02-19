NewsReader.Handler = function() {

}

NewsReader.Handler.prototype = {

    renderNewsList: function() {
        var newsHeaderToolBar = new NewsReader.ui.HeaderToolBar();
        newsHeaderToolBar.showButtonLoadingState($('.newsreader-header-toolbar-load-button'));

        var newsListPanel = new NewsReader.ui.NewsListPanel();
        newsListPanel.el = $('.newsreader-list-container');

        var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');

        var newsContentPanel = new NewsReader.ui.NewsContentPanel();
        newsContentPanel.el = $('.newsreader-content-panel');

        newsServiceProvider.getNewsHeadlines(newsListPanel.renderNewsHeadlines, newsListPanel);
        newsServiceProvider.getNewsContent(1, newsContentPanel.renderNewsContent, newsContentPanel);
        attachEventToListContainer();
    },

    selectNews: function(e) {
        if($('.list-group').html() != ''){
            var targetElement = e.target;
            var targetId = parseInt(targetElement.getAttribute('data-id'));

            var newsListPanel = new NewsReader.ui.NewsListPanel();
            newsListPanel.el = $('.newsreader-list-container');

            var newsContentPanel = new NewsReader.ui.NewsContentPanel();
            newsContentPanel.el = $('.newsreader-content-panel');

            var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');
            newsServiceProvider.getNewsContent(targetId, newsContentPanel.renderNewsContent, newsContentPanel);

            var activeNewsItems = $('.list-group>.active');
            for(var i = 0; i < activeNewsItems.length; i++) {
                var id = parseInt(activeNewsItems[i].getAttribute('data-id'));
                newsListPanel.deselectNews(id);
            }

            newsListPanel.selectNews(targetId);
        }
    }
}