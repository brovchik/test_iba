NewsReader.data.NewsHeadline = function() {

};

NewsReader.data.NewsHeadline.prototype = {

    /**
     * @type {Number}
     */
    newsId: null,

    /**
     * @type {String}
     */
    title: null,

    /**
     * @param {Object} json
     */
    loadJSON: function(json) {
        this.newsId = json.id;
        this.title = json.title;
    }
    
};