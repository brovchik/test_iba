NewsReader.Handler = function() {

}

NewsReader.Handler.prototype = {

    /**
     * First news list loading
     */
    renderNewsList: function() {

        // Loading required objects
        var newsHeaderToolBar = new NewsReader.ui.HeaderToolBar();
        newsHeaderToolBar.showButtonLoadingState($('.newsreader-header-toolbar-load-button'));

        var newsListPanel = new NewsReader.ui.NewsListPanel();
        newsListPanel.el = $('.newsreader-list-container');

        var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');

        var newsContentPanel = new NewsReader.ui.NewsContentPanel();
        newsContentPanel.el = $('.newsreader-content-panel');

        // Getting news headlines and content of the 1st news item
        newsServiceProvider.getNewsHeadlines(newsListPanel.renderNewsHeadlines, newsListPanel);
        newsServiceProvider.getNewsContent(1, newsContentPanel.renderNewsContent, newsContentPanel);

        // bad hack
        setTimeout(function() {
            newsListPanel.selectNews(1);
        }, 2100);

        // Attaching listeners to news list ant delete button
        attachEventToListContainer();
        attachEventToDeleteButton();
    },

    /**
     * Select news item from list
     *
     * @param e {Event}
     */
    selectNews: function(e) {

        if($('.list-group').html() != ''){

            // Getting Id of target
            var targetElement = e.target;
            var targetId = parseInt(targetElement.getAttribute('data-id'));

            var newsListPanel = new NewsReader.ui.NewsListPanel();
            newsListPanel.el = $('.newsreader-list-container');

            var newsContentPanel = new NewsReader.ui.NewsContentPanel();
            newsContentPanel.el = $('.newsreader-content-panel');

            // Getting news item's content
            var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');
            newsServiceProvider.getNewsContent(targetId, newsContentPanel.renderNewsContent, newsContentPanel);

            // Deleting existing selections
            var activeNewsItems = $('.list-group>.active');
            for(var i = 0; i < activeNewsItems.length; i++) {
                var id = parseInt(activeNewsItems[i].getAttribute('data-id'));
                newsListPanel.deselectNews(id);
            }

            // Select target
            newsListPanel.selectNews(targetId);
        }
    },


    /**
     * Deleting news from list
     */
    deleteNews: function() {

        var newsHeaderToolBar = new NewsReader.ui.HeaderToolBar();

        var newsListPanel = new NewsReader.ui.NewsListPanel();
        newsListPanel.el = $('.newsreader-list-container');

        var newsContentPanel = new NewsReader.ui.NewsContentPanel();
        newsContentPanel.el = $('.newsreader-content-panel');

        var newsServiceProvider = new NewsReader.data.NewsServiceProvider('/data');

        // Searching and deleting from news list array unnecessary items
        var activeNewsItem = $('.list-group>.active');
        var id = parseInt(activeNewsItem[0].getAttribute('data-id'));
        for(var j = 0; j < newsList.length; j++) {
            if(newsList[j].newsId == id){
                newsList.splice(j, 1);
                break;
            }
        }

        // Updating news counter
        $('.badge').html(newsList.length);

        // Removing from list and choosing next/previous news
        if(newsList.length != 0) {
            newsHeaderToolBar.showButtonLoadingState($('.newsreader-header-toolbar-delete-button'));
            var nextNode = activeNewsItem.next();
            var previousNode = activeNewsItem.prev();

            activeNewsItem.remove();
            if(nextNode.length != 0) {
                setTimeout(function() {
                    newsHeaderToolBar.hideButtonLoadingState($('.newsreader-header-toolbar-delete-button'));
                }, 2000);
                var nextId = parseInt(nextNode[0].getAttribute('data-id'));
                newsListPanel.selectNews(nextId);
                newsServiceProvider.getNewsContent(nextId, newsContentPanel.renderNewsContent, newsContentPanel);
            }
            else {
                setTimeout(function() {
                    newsHeaderToolBar.hideButtonLoadingState($('.newsreader-header-toolbar-delete-button'));
                }, 2000);                var prevId = parseInt(previousNode[0].getAttribute('data-id'));
                newsListPanel.selectNews(prevId);
                newsServiceProvider.getNewsContent(prevId, newsContentPanel.renderNewsContent, newsContentPanel);
            }
        }
        else {
            newsHeaderToolBar.disableButton($('.newsreader-header-toolbar-delete-button'));
            $('.list-group').empty();
            $('.newsreader-content-panel').empty();
        }


    }
}