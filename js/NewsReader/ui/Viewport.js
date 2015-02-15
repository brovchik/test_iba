NewsReader.ui.Viewport = function() {
   
};

NewsReader.ui.Viewport.prototype = {

    /**
     * @type {String}
     */
    template:  '<div class="newsreader-viewport">' +
                    '<div class="row">' +
                        '<div class="col-md-8 newsreader-col newsreader-header-toolbar-container"></div>' +
                        '<div class="col-md-4 newsreader-col newsreader-header-statusbar-container"></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-md-4 newsreader-col newsreader-list-container"></div>' +
                        '<div class="col-md-8 newsreader-col newsreader-content-container"></div>' +
                    '</div>' +
                '</div>',

    /**
     * @type {Object} jQuery Object
     */
    el: null,

    /**
     * @type {NewsReader.ui.HeaderToolBar}
     */
    headerToolBar: null,

    /**
     * @type {NewsReader.ui.HeaderStatusBar}
     */
    headerStatusBar: null,

    /**
     * @type {NewsReader.ui.NewsListPanel}
     */
    listPanel: null,

    /**
     * @type {NewsReader.ui.NewsContentPanel}
     */
    contentPanel: null,

    /**
     * @param {Object} container jQuery Object
     */
    renderTo: function(container) {
        this.el = $(this.template);

        this.headerToolBar = new NewsReader.ui.HeaderToolBar();
        this.headerToolBar.renderTo(this.el.find('.newsreader-header-toolbar-container'));

        this.headerStatusBar = new NewsReader.ui.HeaderStatusBar();
        this.headerStatusBar.renderTo(this.el.find('.newsreader-header-statusbar-container'));

        this.listPanel = new NewsReader.ui.NewsListPanel();
        this.listPanel.renderTo(this.el.find('.newsreader-list-container'));

        this.contentPanel = new NewsReader.ui.NewsContentPanel();
        this.contentPanel.renderTo(this.el.find('.newsreader-content-container'));

        this.el.appendTo(container);
    }

};