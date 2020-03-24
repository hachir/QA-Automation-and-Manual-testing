let  hachir  ={}
module.exports ={
    before:browser=> {
        hachir  = browser.page.reactPage(),
        hachir .navigate()
    },
    after:browser => {
        hachir .end()
    }
}