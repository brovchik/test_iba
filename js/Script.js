

function renderNewsList(e) {
    var newsListPanel = new NewsReader.ui.NewsListPanel();
    newsListPanel.renderTo($('.newsreader-list-container'));
    console.log(newsListPanel);
    alert("function works ");
}
