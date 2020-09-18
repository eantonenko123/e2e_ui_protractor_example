const searchInput = element(by.css('input[role = "combobox"]'));
const searchButton = element(by.css('.FPdoLc input[name="btnK"][type="submit"]'));

const GoogleMainPage = function() {
    this.get = function() {
        browser.get('https://www.google.com/');
    };

    this.setSearchValue = function(value) {
        searchInput.sendKeys(value);
    };

    this.clickSearchButton = function() {
        searchButton.click();
    };
};
module.exports = new GoogleMainPage();
