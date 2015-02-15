NewsReader.ui.NewsListPanel = function() {

};

NewsReader.ui.NewsListPanel.prototype = {

    /**
     * @type {String}
     */
    template:  '<div class="newsreader-list-panel">' +
                    '<div class="list-group"></div>' +
                '</div>',

    /**
     * @type {String}
     */
    itemsTemplate: '{{#items}}<a href="#{{newsId}}" class="list-group-item newsreader-list-panel-item-{{newsId}}">{{title}}</a>{{/items}}',

    /**
     * @type {Object} jQuery Object
     */
    el: null,

    /**
     * @param {Object} container jQuery Object
     */
    renderTo: function(container) {
        this.el = $(this.template);
        this.el.appendTo(container);
    },

    /**
     * @param {NewsReader.data.NewsHeadline[]} headlines
     */
    renderNewsHeadlines: function(headlines) {
        var html = Mustache.render(this.itemsTemplate, {items: headlines});
        this.el.find('.list-group').html(html);
    },

    /**
     * @param {Number} newsId
     */
    selectNews: function(newsId) {
        this.el.find('.newsreader-list-panel-item-' + newsId).addClass('active');
    },

    /**
     * @param {Number} newsId
     */
    deselectNews: function(newsId) {
        this.el.find('.newsreader-list-panel-item-' + newsId).removeClass('active');
    }

};