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

        //bad hack
        setTimeout(function() {
            newsListPanel.selectNews(1);
        }, 2100);
        attachEventToListContainer();
        attachEventToDeleteButton();
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
    },

    deleteNews: function() {
        var newsListPanel = new NewsReader.ui.NewsListPanel();
        newsListPanel.el = $('.newsreader-list-container');

        var newsContentPanel = new NewsReader.ui.NewsContentPanel();
        newsContentPanel.el = $('.newsreader-content-panel');

        var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');

        debugger;
        var activeNewsItems = $('.list-group>.active');
        for(var i = 0; i < activeNewsItems.length; i++) {
            var id = parseInt(activeNewsItems[i].getAttribute('data-id'));
            for(var j = 0; j < newsList.length; j++) {
                if(newsList[j].newsId == id){
                    newsList.splice(j, 1);
                    break;
                }
            }
        }
        $('.badge').html(newsList.length);

        if(newsList.length != 0) {
            $('.list-group').html('');
            newsListPanel.renderNewsHeadlines(newsList);

            for(var i = 0; i < activeNewsItems.length; i++) {
                var id = parseInt(activeNewsItems[i].getAttribute('data-id'));
                newsListPanel.deselectNews(id);
            }
            if(id == newsList.length-1)
            {
                newsListPanel.selectNews(newsList.length-1);
                newsServiceProvider.getNewsContent(newsList.length-1, newsContentPanel.renderNewsContent, newsContentPanel);
            }
            else {
                newsListPanel.selectNews(id+1);
                newsServiceProvider.getNewsContent(id+1, newsContentPanel.renderNewsContent, newsContentPanel);
            }
        }
        else {
            var newsHeaderToolBar = new NewsReader.ui.HeaderToolBar();
            newsHeaderToolBar.disableButton($('.newsreader-header-toolbar-delete-button'));
            $('.newsreader-content-panel').html('');
        }


    }
}