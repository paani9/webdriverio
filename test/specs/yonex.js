describe("launchyonex",async()=>{
    it('sport',async()=>{
        await browser.url("https://www.yonex.com/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
        
        await browser.closeWindow()

        
    })
})