class GradePage
{
    get gradebtn () {
        return $("//span[.='Grade']");
    }
    get gradeName () {
        return $("//input[@id='name']");
    }
    get admissionfee () {
        return $("//input[@id='admission_fee']");
    }
    get hallcharge () {
        return $("//input[@id='hall_charge']");
    }
    get nextbtn () {
        return $("//button[.='Next']");
    }
    get waitUntil() {
        return $("//h4[.='Information...!']/../following-sibling::div[1]");
    }
    get range()
    {
        return $("//input[@name='mark_range[]']")
    }
    get grades()
    {
        return $("//input[@placeholder='A']")
    }
    get addrgsubmitbtn()
    {
        return $("//button[.='Submit']")
    }
 
    get inpopup(){
      return $("//h3[.='Add eMarks Range & Grade']")
    }
    
    get Allexamvalid () {
        return $("//h3[.='All Grade']");
    }
    get range_grade() {
        return $("//h3[.='Add eMarks Range & Grade']")
    }
    get scrollbar()
    {
      return $("//div[@class='dataTables_info']")
    }
    get search_bar()
    {
      return $("//input[@type='search']")
    }
    get verifygradename()
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
    async creategrade(grade1,admissfee,hallcharge){
        await this.gradebtn.click()
        await this.gradeName.setValue(grade1)
        await this.admissionfee.setValue(admissfee)
        await this.hallcharge.setValue(hallcharge)
        await this.nextbtn.click()
       /// rangeandgrade=await this.range_grade.getText()
        //await expect(rangeandgrade).toHaveText('Add eMarks Range & Grade')

    }

    async addrangeandgrade(range,grade1)
        {
            await this.range.setValue(range)
            await this.grades.setValue(grade1)
           await  this.addrgsubmitbtn.click();

        }
        async  informationpopup()
        {
         
                await expect(this.inpopup.getText()).toHaveTextContaining(' Your information has been successfully inserted in our database.')
            
        }
       
    async allgradevalid()
    {
        await expect(this.Allgradevalid).toHaveTextContaining('All Grade')
    }
    async scrollaction()
    {
      await this.scrollbar.scrollIntoView()
    }
   async searchbaraction(gradename1)
   {
    await this.search_bar.setValue(gradename1)
   }
//    async verifygradename()
//    {
//     cname=await this.verifygradename.getText()
//     return cname
//    }
   async deleting_created_grade()
   {
    await this.deletebtn.click()
    await this.signout.click()
  
   }

}
module.exports = new GradePage();















 
 

   
 
   
      