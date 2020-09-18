const googleMainPage = require ('../pages/googleMainPage');
const googleSearchResultPage = require ('../pages/googleSearchResultPage');
const capitalixMainPage = require ('../pages/capitalixMainPage');

const searchValue = 'capitalix';

describe('Google Search', function() {
    it('Load google page', function() {
        googleMainPage.get();
        expect(browser.getTitle()).toEqual("Google");
    });

    it('Set search value and submit', function() {
        googleMainPage.setSearchValue(searchValue);
        googleMainPage.clickSearchButton();
        expect(browser.getTitle()).toEqual(`${searchValue} - Google Search`);
    });

    it('Click capitalix link', function() {
        googleSearchResultPage.clickCapitalixLink();
        expect(capitalixMainPage.isCapitalixLogoPresent()).toBeTruthy();
    });
});
