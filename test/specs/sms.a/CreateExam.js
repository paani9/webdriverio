

/********************************************************************************************** */


describe('createExam',async()=>{
    const exam="Js"+""+Math.round(Math.random()*10000)
    it('sendurl_reg',async()=>{
        await browser.url("http://rmgtestingserver/domain/Student_Management_System/")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
        await expect(browser).toHaveTitle('Student Management System')
    })
    it('login to the application',async()=> {
       const un=await browser.$("//input[@name='email']")
        await un.setValue("admin@gmail.com")
        const pwd=await browser.$("//input[@id='password']")
        await pwd.setValue("12345")
        await browser.$("//button[@id='btnSubmit']").click()
        console.log(await browser.getUrl());
       await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Student_Management_System/view/dashboard.php")
})

it('click on exam',async()=> { 
const un=await browser.$("//span[.='Exam']")
await un.click()
const ce1=await browser.$("//a[.='Create Exam']")
await ce1.click()
const elem = await $("//h3[.='All Exam']")
await expect(elem).toHaveTextContaining('All Exam')


})
it('Add Exam and validation',async()=>{
    const addbn=await browser.$("//a[.='Add ']")
    addbn.click()
    const addexam=await browser.$("//h3[text()='Add Exam']")
    await expect(addexam).toHaveText('Add Exam')
    const enterexamname=await browser.$("//input[@placeholder='Enter exam name']")
   // const exam="Js"+""+Math.round(Math.random()*10000)
    console.log(exam)
    await enterexamname.setValue(exam)
    const submitbtn=await browser.$("//button[@type='submit']")
    await submitbtn.click()
    
    // const inpopup=await browser.$("//h4[.='Information...!']/../following-sibling::div[1]")
    // console.log(inpopup.getText())
    // await expect(inpopup).toHaveTextContaining(' Your information has been successfully inserted in our database.')

    const Allexamvalid=await browser.$("//h3[.='All Exam']")
    await expect(Allexamvalid).toHaveText('All Exam')
    
})
    it('scroll in to view',async()=>{
        const scroll = await $("//div[@class='dataTables_info']")
        await scroll.scrollIntoView()
    })
    
    it('searching for created classroom',async()=>{
        await browser.pause(4000)
    
        var search_bar = await browser.$("//input[@type='search']")
        await search_bar.setValue(exam)
        
        
        
        
        var verify = await browser.$("//table[@id='example1']/tbody/tr[last()]/td[2]") //td[.="${clsname}"]//td[2]
        let cname=await verify.getText()
        await console.log(cname);
        // var verify1 = await browser.$("//table[@id='example1']/tbody/tr[last()]/td[3]") 
        // let scount=await verify1.getText()
        // await console.log(scount);
        if(cname==exam)
        {
            console.log(" exam is sucessful created ")
            
        }
        

  else{
         console.log(" exam is not successful created")
 
        }
        
    })
    
    it('deleting created classroom ',async()=>{
        var deletebtn = await browser.$("//a[.='Delete']")
        await deletebtn.click()
        await browser.pause(1000)
        var signout = await browser.$("//a[@id='btnYes']") 
        await signout.click()
        await browser.pause(4000)
    })
    
    it('logout as a admin ',async()=>{
        var toggle_bar = await browser.$("//img[@alt='User Image']")
        await toggle_bar.click()
        var signout = await browser.$("//a[text()='Sign out']") 
        await signout.click()
    })
    
    })
    