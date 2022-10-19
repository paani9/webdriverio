describe("launchthelaraclassified",async()=>{
    it('shopping',async()=>{
        await browser.url("http://122.166.192.191:9003/")
        
        await browser.maximizeWindow()
        await browser.$("//a[.='Signup']").click()
        const gender=await $("//select[@name='gender']")
        await gender.selectByVisibleText('Mrs');
        await browser.$("//input[@name='name']").setValue("st2")
        await browser.$("//label[contains(.,'Professional')]").click()
        const country=await $("//select[@id='country']")
        await country.selectByVisibleText('India');

        await browser.$("//input[@name='phone']").setValue("111-222-3333")
        await browser.$("//input[@name='email']").setValue("st2@gmail.com")
        await browser.$("//input[@name='password']").setValue("123456")
        await browser.$("//input[@name='password_confirmation']").setValue("123456")
        await browser.$("//input[@name='term']").click()
        await browser.$("//button[.=' Register ']").click()
        await browser.$("//a[.='Login']").click()
        await browser.$("//input[@name='email']").setValue("st2@gmail.com")
        await browser.$("//input[@name='password']").setValue("123456")
        await browser.$("//button[.=' Login ']").click()
        await browser.$("//input[@name='phone']").setValue("1112243333")
        await browser.$("//label[.='About Yourself']/ancestor::div[@class='form-group']/following-sibling::div[3]/div/button[.='Update']").click()
        await browser.$("//a[@href='http://122.166.192.191:9003/logout']").click()
        await browser.closeWindow()

        })
})