module.exports = class Page {
   
    open () {
        return browser.url('http://rmgtestingserver/domain/Student_Management_System')
    }
}