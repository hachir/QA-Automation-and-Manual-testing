let yoodlize = {}
module.exports = {
    beforeEach: browser => {
        yoodlize = browser.page.yoodlizePage()
        yoodlize.navigate()
        // .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Test 1': browser => {
        yoodlize
            .click('@recreationalVehicles')
            .verify.containsText('@mkider', 'Recreational Vehicles')
            .click('@roider')
    },
    'Test 2': browser => {
        yoodlize
            .click('@llider')
            .waitForElementVisible('@mkider')
            .verify.containsText('@mkider', 'Outdoor Gear')
            .click('@roider')
            .pause(1000)
    },
    'Test 3': browser => {
        yoodlize
            .pause(2000)
            .click('@mmder')
            .verify.containsText('@mkider', 'Electronics')
            .click('@roider')
            .pause(1000)
    },
    'Test 4': browser => {
        yoodlize
            .click('@roror')
            .verify.containsText('@mkider', 'Party & Wedding Equipment')
            .click('@roider')
            .pause(1000)
    },
    'Test 5': browser => {
        yoodlize
            .click('@goror')
            .verify.containsText('@mkider', 'Tools')
            .click('@roider')
            .pause(1000)
    }

}
