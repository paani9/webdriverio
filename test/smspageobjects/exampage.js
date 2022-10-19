

class ExamPage{

get exambtn() {
    return $("//span[.='Exam']")
}
get createExambtn()
{
    return $("//a[.='Create Exam']")

}
get  allExamval()
{
    return $("//h3[.='All Exam']")
}

async createExam(){
    await this.exambtn.click()
    await this.createExambtn.click();
    await expect(this.allExamval).toHaveTextContaining('All Exam')
}




}

module.exports = new ExamPage();