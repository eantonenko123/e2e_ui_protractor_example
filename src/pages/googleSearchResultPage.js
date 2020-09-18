const capitalixLink = element.all(by.css('div#search a')).first();

const GoogleSearchResultPage = function() {
    this.clickCapitalixLink = function() {
        capitalixLink.click();
    };
};
module.exports = new GoogleSearchResultPage();
