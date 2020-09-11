const searchInput = element(by.css('input[role = "combobox"]'));

const GoogleMainPage = function() {
    this.get = function() {
        browser.get('https://www.google.com/');
    };
};
module.exports = new GoogleMainPage();
