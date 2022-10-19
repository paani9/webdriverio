

const Page = require('./page.js');


class LoginPage extends Page {
    
    get inputUsername () {
        return $("//input[@name='email']");
    }

    get inputPassword () {
        return $("//input[@id='password']");
    }

    get btnSubmit () {
        return $("//button[@id='btnSubmit']");
    }

    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

   
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();


