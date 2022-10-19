const fs=require('fs')
let credentials=JSON.parse(fs.readFileSync("./test/specs/Testdata/login.json"))
describe("log in application",async()=>{
// it('sendurl',async()=>{
//     // await browser.url("http://rmgtestingserver/domain/Student_Management_System/")
//     // await console.log(browser.getTitle())
//     // await browser.maximizeWindow()
//     // await expect(browser).toHaveTitle('Student Management System')
// })
credentials.forEach(({username,password}) => {
    it('login to the application',async()=> {
        await browser.url("http://rmgtestingserver/domain/Student_Management_System/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
        await expect(browser).toHaveTitle('Student Management System')
        const un=await browser.$("//input[@name='email']")
         await un.setValue(username)
         const pwd=await browser.$("//input[@id='password']")
         await pwd.setValue(password)
         await browser.$("//button[@id='btnSubmit']").click()
         console.log(await browser.getUrl());
        await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Student_Management_System/view/dashboard.php")
        
 })
  
    
})
})