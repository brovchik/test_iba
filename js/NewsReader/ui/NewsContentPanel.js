NewsReader.ui.NewsContentPanel = function() {

};

NewsReader.ui.NewsContentPanel.prototype = {

    /**
     * @type {String}
     */
    template: '<div class="newsreader-content-panel"></div>',

    /**
     * @type {String}
     */
    newsContentTemplate:  '<h2>{{title}}</h2>' +
                          '<div class="newsreader-content-panel-body">{{content}}</div>',

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
     * @param {NewsReader.data.NewsContent} content
     */
    renderNewsContent: function(content) {
        var html = Mustache.render(this.newsContentTemplate, content);
        this.el.html(html);
    }

};