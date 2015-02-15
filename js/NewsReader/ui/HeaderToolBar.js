NewsReader.ui.HeaderToolBar = function() {

};

NewsReader.ui.HeaderToolBar.prototype = {

    /**
     * @type {String}
     */
    template:  '<div class="newsreader-header-toolbar">' +
                    '<button type="button" data-loading-text="Loading News..." class="btn btn-default newsreader-header-toolbar-load-button"><span class="glyphicon glyphicon-refresh"></span> Load News</button>' +
                    '<button type="button" data-loading-text="Deleting Selected News..." class="btn btn-default newsreader-header-toolbar-delete-button"><span class="glyphicon glyphicon-trash"></span> Delete Selected News</button>' +
                '</div>',

    /**
     * @type {Object} jQuery Object
     */
    el: null,

    /**
     * @type {Object} jQuery Object
     */
    loadButtonEl: null,

    /**
     * @type {Object} jQuery Object
     */
    deleteButtonEl: null,
    
    /**
     * @param {Object} container jQuery Object
     */
    renderTo: function(container) {
        this.el = $(this.template);

        this.loadButtonEl = this.el.find('.newsreader-header-toolbar-load-button');
        this.deleteButtonEl = this.el.find('.newsreader-header-toolbar-delete-button');

        this.disableButton(this.deleteButtonEl);
        
        this.el.appendTo(container);
    },

    /**
     * @param {Object} btn jQuery Object representing a HTML button
     */
    showButtonLoadingState: function(btn) {
        btn.button('loading');
    },

    /**
     * @param {Object} btn jQuery Object representing a HTML button
     */
    hideButtonLoadingState: function(btn) {
        btn.button('reset');
    },

    /**
     * @param {Object} btn jQuery Object representing a HTML button
     */
    enableButton: function(btn) {
        btn.removeAttr('disabled');
    },

    /**
     * @param {Object} btn jQuery Object representing a HTML button
     */
    disableButton: function(btn) {
        btn.attr('disabled', 'disabled');
    }

};