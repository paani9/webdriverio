describe("launchtheamazon",async()=>{
    it('shopping',async()=>{
        await browser.url("https://www.facebook.com/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
    
        await browser.closeWindow()
        
        
    })
})