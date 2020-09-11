const googleMainPage = require ('../pages/googleMainPage');

describe('Google Search', function() {
    it('Load google page', function() {
        googleMainPage.get();
        expect(browser.getTitle()).toEqual("Google");
    });
});
