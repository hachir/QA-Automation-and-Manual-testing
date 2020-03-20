let  hachir  ={}
module.exports ={
    before:browser=> {
        hachir  = browser.page.reactPage(),
        hachir .navigate()
    },
    after:browser => {
        hachir .end()
    },
    'Even and Odds Test': browser => {
        hachir 
            .setValue('@evenOddInput', '29')
            .click('@evenOddButton')
           .verify.containsText('@oddResults', '29')
            .pause(5000)
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput', '34')
            .click('@evenOddButton')
           .verify.containsText('@evenResults','34')
            .pause(5000)
    },
    'Filter Object Test': browser => {
        hachir 
            .setValue('@objectFilterInput', 'name')
            .click('@objectFilterButton')
            .pause(5000)
           .verify.containsText('@objectFilterResults','name')
            .clearValue('@objectFilterInput')
            .pause(5000)
            .setValue('@objectFilterInput', 'title')
            .click('@objectFilterButton')
           .verify.containsText('@objectFilterResults','title')
            .clearValue('@objectFilterInput')
            .pause(5000)
            .setValue('@objectFilterInput', 'age')
            .click('@objectFilterResults')
           .verify.containsText('@objectFilterResults', 'age')
            .clearValue('@objectFilterInput')
            .setValue('@objectFilterInput','hairColor')
            .click('@objectFilterButton')
           .verify.containsText('@objectFilterResults','hairColor')
            .pause(5000)
    },
    'Filter String Test': browser => {
        hachir 
            .setValue('@nameFilterInput', 'James')
            .click('@nameFilterButton')
            .waitForElementVisible('@nameFilterResults')
           .verify.containsText('@nameFilterResults', 'James')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Jessica')
            .click('@nameFilterButton')
            .waitForElementVisible('@nameFilterResults')
           .verify.containsText('@nameFilterResults', 'Jessica')
            .pause(5000)
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Melody')
            .click('@nameFilterButton')
           .verify.containsText('@nameFilterResults', 'Melody')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Tyler')
            .click('@nameFilterButton')
           .verify.containsText('@nameFilterResults', 'Tyler')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Blake')
            .click('@nameFilterButton')
           .verify.containsText('@nameFilterResults', 'Blake')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Jennifer')
            .click('@nameFilterButton')
           .verify.containsText('@nameFilterResults', 'Jennifer')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Mark')
            .click('@nameFilterButton')
           .verify.containsText('@nameFilterResults', 'Mark')
            .clearValue('@nameFilterInput')
            .setValue('@nameFilterInput', 'Maddy')
            .click('@nameFilterButton')
           .verify.containsText('@nameFilterResults', 'Maddy')
            .clearValue('@nameFilterInput')
            .pause(5000)
        },
        'Palindrome Test':browser => {
            hachir 
            .setValue('@palindromeInput', '12021')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults', 'true')
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', 'lol')
            .verify.containsText('@palindromeResults','true')
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', '47')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults', 'false')
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', 'look')
            .verify.containsText('@palindromeResults','false')
            .clearValue('@palindromeInput')
        },
  
}