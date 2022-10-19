
describe('Booking flight',async()=>{
    
    it('sendurl',async()=>{
        await browser.url("https://www.spicejet.com")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
    
    })
    it('flight booking',async()=>{
      const roundtrip=await browser.$("//div[@data-testid='round-trip-radio-button']")
      roundtrip.click()
      const deperturedate=await browser.$("//div[text()='Departure Date']")
      deperturedate.click()
     const dcalender=await browser.$("//div[text()='November ' and text()='2022']/../following-sibling::div/following-sibling::div/div/div[.='1']")
      await dcalender.doubleClick()
      const returndate=await browser.$("//div[text()='Return Date']")
      deperturedate.click()
     const rcalender=await browser.$("//div[text()='November ' and text()='2022']/../following-sibling::div/following-sibling::div/div/div[.='15']")
      await dcalender.doubleClick()
 const armedforcerbtn=await browser.$("//div[text()='Armed Forces']")
 await armedforcerbtn.click()
 const searchflightbtn=await browser.$("//div[text()='Search Flight']")
 await searchflightbtn.click()

    
    })
})