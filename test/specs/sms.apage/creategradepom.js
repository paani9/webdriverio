
const LoginPage=require('../../smspageobjects/loginpage')

const gradepage=require('../../smspageobjects/gradepage.js')
const LogoutPage=require('../../smspageobjects/logoutpage')

describe('create grade',()=>{
    let gradename="Js"+""+Math.round(Math.random()*10000)

    it('grade creation',async()=>{
        await LoginPage.open()
        await LoginPage.login('admin@gmail.com','12345')
        await gradepage.creategrade(gradename,'1000','500')
        await gradepage.addrangeandgrade('75-100','A')
        //await gradepage.informationpopup()
        //await gradepage.allgradevalid()
       // await gradepage.scrollaction()
        

       browser.pause(4000)

                gradepage.searchbaraction(gradename)
                browser.pause(4000)
                //await gradepage.scrollaction()
                browser.pause(2000)
                console.log(gradename)
               var gname =await gradepage.verifygradename.getText()
               console.log(gname)
               console.log(gradename)
               if(gname==gradename)
            {
                console.log("grade is sucessful created ")
                
            }
            
        
        else{
             console.log(" grade is not successful created")
        
            }
           // gradepage.deleting_created_grade()
            LogoutPage.logoutaction()
                

 })
        })
        