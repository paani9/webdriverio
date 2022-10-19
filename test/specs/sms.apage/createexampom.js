
const LoginPage=require('../../smspageobjects/loginpage')
const ExamPage=require('../../smspageobjects/exampage')
const addexampage=require('../../smspageobjects/addExamAndValidationpage')
const LogoutPage=require('../../smspageobjects/logoutpage')

describe('login into sms',()=>{
    const exam1="Js"+""+Math.round(Math.random()*10000)

    it('login to admin',async()=>{
        await LoginPage.open()
        await LoginPage.login('admin@gmail.com','12345')
        await ExamPage.createExam()
        
        addexampage.addExamandvalidation(exam1)
        addexampage.scrollaction()
        addexampage.searchbaraction(exam1)
        console.log(exam1)
       
       var cname =await addexampage.verifyexamname.getText()
       if(cname==exam1)
    {
        console.log(" exam is sucessful created ")
        
    }
    

else{
     console.log(" exam is not successful created")

    }
   addexampage.deleting_created_exam()
    LogoutPage.logoutaction()
        
       

    })

})


