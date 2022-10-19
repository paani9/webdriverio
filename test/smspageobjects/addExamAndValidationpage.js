class AddExamAnDValidationpage
{
get addbn()
{
    return $("//a[.='Add ']")
}
get addexam()
{
    return $("//h3[text()='Add Exam']")
}
get enterexamname()
    {
        return $("//input[@placeholder='Enter exam name']")

    }
    get submitbtn()
    {
        return $("//button[@type='submit']")
    }
    get Allexamvalid()
    {
        return $("//h3[.='All Exam']")
    }
    get inpopup()
    {
        return $("//h4[.='Information...!']/../following-sibling::div[1]")
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
    async addExamandvalidation(exam)
    {
        this.addbn.click()
        await expect(this.addexam).toHaveText('Add Exam')
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        await this.enterexamname.setValue(exam)
        this.submitbtn.click()
       // await expect(this.inpopup).toHaveTextContaining(' Your information has been successfully inserted in our database.')
        await expect(this.Allexamvalid).toHaveText('All Exam')
    }
    async scrollaction()
    {
      await this.scroll.scrollIntoView()
    }
   async searchbaraction(examname)
   {
    await this.search_bar.setValue(examname)
   }
  //  async verifyexamname()
  //  {
  //   cname=await this.verifyclassname.getText()
  //   return cname
  //  }
   async deleting_created_exam()
   {
    await this.deletebtn.click()
    await this.signout.click()
  
   }



}


module.exports = new AddExamAnDValidationpage();



