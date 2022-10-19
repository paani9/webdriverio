class LogoutPage
{

get toggle_bar()
{
  return $("//img[@alt='User Image']")
}
get signout()
{
  return $("//a[text()='Sign out']")
}
async logoutaction()
{
    await this.toggle_bar.click()
    await this.signout.click()
}

}
module.exports=new LogoutPage()

