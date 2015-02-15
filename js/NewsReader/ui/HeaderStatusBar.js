NewsReader.ui.HeaderStatusBar = function() {

};

NewsReader.ui.HeaderStatusBar.prototype = {

    /**
     * @type {String}
     */
    template:  '<div class="newsreader-header-statusbar">News Count <span class="badge">0</span></div>',

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
    }

};