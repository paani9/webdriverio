describe('createGrade',async()=>{
    let grade="Js"+""+Math.round(Math.random()*10000)
    it('sendurl',async()=>{
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
it('createGrade',async()=>{
    const gradebtn=await browser.$("//span[.='Grade']") 
    await gradebtn.click()
    console.log("1234")
   const gradeName=await browser.$("//input[@id='name']")
   await gradeName.setValue(grade)
   console.log("$$$$$$$$$$$$$")
   const admissionfee=await browser.$("//input[@id='admission_fee']")
  await admissionfee.setValue("1000")
  console.log("**************")
   const hallcharge=await browser.$("//input[@id='hall_charge']")
   await hallcharge.setValue("200")
   const nextbtn=await browser.$("//button[.='Next']")
   await nextbtn.click()
   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
 
   //var range_grade=await browser.$("//h3[.='Add eMarks Range & Grade']").getText()
   //asert

   
    // await browser.waitUntil(
    //     async () => (await $("//h3[.='Add eMarks Range & Grade']").getText()) === 'Add eMarks Range & Grade'
    //     // {
    //     //     timeout: ,
    //     //     timeoutMsg: 'expected text to be different after 5s'
    //     // }
    // );


   var range=await browser.$("//input[@name='mark_range[]']")
   await range.setValue("75-100")

   var grades=await browser.$("//input[@placeholder='A']")
   await grades.setValue("A")
var addrgsubmitbtn=await browser.$("//button[.='Submit']")
await addrgsubmitbtn.click();
//await browser.waitUntil(
//     async () => (await $("//h4[.='Information...!']/../following-sibling::div[1]").getText()) === ' Your information has been successfully inserted in our database.')
// const inpopup=await browser.$("//h4[.='Information...!']/../following-sibling::div[1]")
//     console.log(inpopup.getText())
//     await expect(inpopup).toHaveTextContaining(' Your information has been successfully inserted in our database.')

    const Allexamvalid=await browser.$("//h3[.='All Grade']")
    await expect(Allexamvalid).toHaveTextContaining('All Grade')
    
})
it('scroll in to view',async()=>{
    const scroll = await $("//div[@class='dataTables_info']")
    await scroll.scrollIntoView()
})
it('searching for created classroom',async()=>{
    await browser.pause(4000)

    var search_bar = await browser.$("//input[@type='search']")
    await search_bar.setValue(grade)
    
    
    
    var verify = await browser.$("//table[@id='example1']/tbody/tr[last()]/td[2]") //td[.='${grade}']//td[2]
    let cname=await verify.getText()
    await console.log(cname);
    if(cname==grade)
    {
        console.log(" grade sucessful created")
        
    }
    

else{
     console.log(" grade is not successful created")

    }
    
})

it('deleting created classroom',async()=>{
    var deletebtn = await browser.$("//a[.='Delete']")
    await deletebtn.click()
    await browser.pause(1000)
    var signout = await browser.$("//a[@id='btnYes']") 
    await signout.click()
    await browser.pause(4000)
})

it('logout as a admin',async()=>{
    var toggle_bar = await browser.$("//img[@alt='User Image']")
    await toggle_bar.click()
    var signout = await browser.$("//a[text()='Sign out']") 
    await signout.click()
})

})

      
     
