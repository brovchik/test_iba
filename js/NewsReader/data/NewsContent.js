NewsReader.data.NewsContent = function() {

};

NewsReader.data.NewsContent.prototype = {

    /**
     * @type {Number}
     */
    newsId: null,

    /**
     * @type {String}
     */
    title: null,

    /**
     * @type {String}
     */
    content: null,

    /**
     * @param {Object} json
     */
    loadJSON: function(json) {
        this.newsId = json.id;
        this.title = json.title;
        this.content = json.content;
    }

};