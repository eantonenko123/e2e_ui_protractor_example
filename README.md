# e2e_ui_protractor_example
## Scenario (using Page Object pattern https://www.protractortest.org/#/page-objects)
1. Go to https://www.google.com/ (+assertion)
2. Input "capitalix" into search field (+assertion)
3. Click to "Google Search" button (+assertion)
4. Click to "Capitalix" reference in the first search result (+assertion)
5. Check that "Capitalix" website is opened

### Run all tests
- protractor protractor.conf.js 
