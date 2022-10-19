xdescribe('CreateGrade',async()=>{
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
   const gradeName=await browser.$("//input[@id='name']")
   await gradeName.setValue(grade)
   const admissionfee=await browser.$("//input[@id='admission_fee']")
  await admissionfee.setValue("1000")
   const hallcharge=await browser.$("//input[@id='hall_charge']")
   await hallcharge.setValue("200")
   const nextbtn=await browser.$("//button[.='Next']")
   await nextbtn.click()
 
   //var range_grade=await browser.$("//h3[.='Add eMarks Range & Grade']").getText()
   //asert

   
    await browser.waitUntil(
        async () => (await $("//h3[.='Add eMarks Range & Grade']").getText()) === 'Add eMarks Range & Grade'
        // {
        //     timeout: ,
        //     timeoutMsg: 'expected text to be different after 5s'
        // }
    );


   var range=await browser.$("//input[@name='mark_range[]']")
   await range.setValue("75-100")

   var grades=await browser.$("//input[@placeholder='A']")
   await grades.setValue("A")
var addrgsubmitbtn=await browser.$("//button[.='Submit']")
await addrgsubmitbtn.click();
await browser.waitUntil(
    async () => (await $("//h4[.='Information...!']/../following-sibling::div[1]").getText()) === ' Your information has been successfully inserted in our database.')
const inpopup=await browser.$("//h4[.='Information...!']/../following-sibling::div[1]")
    console.log(inpopup.getText())
    await expect(inpopup).toHaveTextContaining(' Your information has been successfully inserted in our database.')

    const Allexamvalid=await browser.$("//h3[.='All Grade']")
    await expect(Allexamvalid).toHaveTextContaining('All Grade')
    
   
      
     for (let j=0;j<10;j++) 
      {

        var namelist=await $$("//div[@class='dataTables_length']/../../following-sibling::div/div/table/thead/following-sibling::tbody/tr/td[2]")[j].getText()
        console.log("the name list are "+namelist)
           if(namelist==grade)
           {
               console.log("created grade sucessful")
               break;
           }
           
     else{
            console.log("created grade is not successful")
    
           }
       }

       
    

    
     
})
})
