NewsReader.data.NewsServiceProvider = function(dataPath) {

    this.dataPath = dataPath;

};

NewsReader.data.NewsServiceProvider.prototype = {

    /**
     * @param {Function} callback Optional, function to callback after the Ajax request is received
     * @param {Object} scope The scope of the callback function. Required if the callback function is passed
     */
    getNewsHeadlines: function(callback, scope) {
        
        var dataPath = this.dataPath;

        setTimeout(function() {
            $.getJSON(dataPath + '/news-headlines.json', function(rawHeadlines) {

                var headlines = [];

                //my addition
                var headerToolBar = new NewsReader.ui.HeaderToolBar();

                $.each(rawHeadlines, function(index, rawHeadline) {
                    var header = new NewsReader.data.NewsHeadline();
                    header.loadJSON(rawHeadline);
                    headlines.push(header);
                });

                //my addition
                headerToolBar.hideButtonLoadingState($('.newsreader-header-toolbar-load-button'));
                headerToolBar.enableButton($('.newsreader-header-toolbar-delete-button'));

                //updating news counter
                var newsCounter = headlines.length;
                $('.badge').html(newsCounter);

                if (callback) {
                    callback.call(scope, headlines);
                }
            });
        }, 2000); // Delay Ajax Call for UI purpose, Please leave
    },

    /**
     * @param {Number} newsId The id of the news
     * @param {Function} callback Optional, function to callback after the Ajax request is received
     * @param {Object} scope The scope of the callback function. Required if the callback function is passed
     */
    getNewsContent: function(newsId, callback, scope) {

        var dataPath = this.dataPath;

        setTimeout(function() {
            $.getJSON(dataPath + '/news-content-' + newsId + '.json', function(rawNewsContent) {

                var newsContent = new NewsReader.data.NewsContent();
                newsContent.loadJSON(rawNewsContent);

                if (callback) {
                    callback.call(scope, newsContent);
                }
            });
        }, 2000); // Delay Ajax Call for UI purpose, Please leave
    },

    /**
     * @param {Number} newsId The id of the news
     * @param {Function} callback Optional, function to callback after the Ajax request is received
     * @param {Object} scope The scope of the callback function. Required if the callback function is passed
     */
    deleteNewsItem: function(newsId, callback, scope) {

        var dataPath = this.dataPath;

        setTimeout(function() {
            $.ajax({
                url: dataPath + '/delete-news.json?id=' + newsId,
                success: function() {
                    if (callback) {
                        callback.call(scope, {deletedNewsId: newsId});
                    }
                }
            });
        }, 2000); // Delay Ajax Call for UI purpose, Please leave
    }
};