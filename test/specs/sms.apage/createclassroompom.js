const LoginPage=require('../../smspageobjects/loginpage')
const ClassroomPage=require('../../smspageobjects/classroompage.js')
const LogoutPage=require('../../smspageobjects/logoutpage')



describe('create classroom',()=>{
    const classroom="class"+""+Math.round(Math.random()*10000)
    const studentscount=""+Math.round(Math.random()*100)

    it('classroom',async()=>{
        await LoginPage.open()
        console.log("login")
        await LoginPage.login('admin@gmail.com','12345')
        
        await ClassroomPage.createclassroom(classroom,studentscount)
        await browser.pause(4000)
        
     await ClassroomPage.scrollaction()
     await browser.pause(2000)
        

        await ClassroomPage.searchbaraction(classroom)
        await browser.pause(2000)
       
       var cname =await ClassroomPage.verifyclassname.getText()
      
       
       if(cname==classroom)
    {
        console.log("classroom is sucessful created ")
        
    }
    

else{
     console.log(" classroom is not successful created")

    }
    ClassroomPage.deleting_created_classroom()
    LogoutPage.logoutaction()
        
       

    })

})



      