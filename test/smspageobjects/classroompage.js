
class ClassroomPage
{
    get classroombtn()
    {
 return $("//span[.='Classroom']")
    }

    get Allclassroomvalid() {
        return $("//h3[.='All Classroom']")
    }
    get classtf()
    {
        return $("//input[@placeholder='Enter classroom name']")
    
    }
    get  studentcount()
    {
        return $("//input[@placeholder='Enter student count']")
    }
    get submitbtn()
  {
    return $("//button[.='Submit']")
  }
  get scrollbar()
{
  return $("//div[@class='dataTables_info']")
}
get search_bar()
{
  return $("//input[@type='search']")
}
get verifyclassname()
{
  return $("//table[@id='example1']/tbody/tr[last()]/td[2]")
}
get deletebtn()
{
  return $("//a[.='Delete']")
}
get signout()
{
  return $("//a[@id='btnYes']") 
}

  async createclassroom(classroomname,stucount)
 {
   await this.classroombtn.click()
   await expect(this.Allclassroomvalid).toHaveTextContaining('All Classroom')
   await this.classtf.setValue(classroomname)
   await this.studentcount.setValue(stucount)
   await this.submitbtn.click()
   await expect(this.Allclassroomvalid).toHaveTextContaining('All Classroom')
   

 }
 async scrollaction()
  {
    
    await this.scrollbar.scrollIntoView()
  
  }
 async searchbaraction(classroomname)
 {
  await this.search_bar.setValue(classroomname)
  
 }
//  async verifyclassname()
//  {
//    cname=await this.verifyclassname.getText()
//   console.log(cname)
//    return cname
  
//  }
 async deleting_created_classroom()
 {
  await this.deletebtn.click()
  await this.signout.click()

 }



}
module.exports=new ClassroomPage();



    
   
