describe('createsubject',async()=>{
    const subjectname="subject"+""+Math.round(Math.random()*10000)
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
    it('create a subject',async()=>{
        const subjectbtn=await browser.$("//span[.='Subject']")
        await subjectbtn.click()
        const subjecttf=await browser.$("//input[@placeholder='Enter Subject name']")
        await subjecttf.setValue(subjectname)
        const subbtn=await browser.$("//button[.='Submit']")
        await subbtn.click()

    })
    it('scroll in to view',async()=>{
        const scroll = await $("//div[@class='dataTables_info']")
        await scroll.scrollIntoView()
    })
    
    it('searching for created classroom',async()=>{
        await browser.pause(4000)
    
        var search_bar = await browser.$("//input[@type='search']")
        await search_bar.setValue(subjectname)
        
        
        
        
        var verify = await browser.$("//table[@id='example1']/tbody/tr[last()]/td[2]") //td[.="${clsname}"]//td[2]
        let cname=await verify.getText()
        await console.log(cname);
        // var verify1 = await browser.$("//table[@id='example1']/tbody/tr[last()]/td[3]") 
        // let scount=await verify1.getText()
        // await console.log(scount);
        if(cname==exam)
        {
            console.log(" subject is sucessful created ")
            
        }
        

  else{
         console.log(" subject is not successful created")
 
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
    
