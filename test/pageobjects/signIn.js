import Page from "./page"

class signIn extends Page{
    
    get email() { return $("#email");}
    
    get password() { return $("#password");}

    get signInButton() {return $("#root > div > main > div > div > form > ul > li:nth-child(5) > button")}

    open(url) {
        super.open(url);
      }

    login(user) {
        this.email.waitForEnabled();
        this.email.setValue(user.email);
        this.password.setValue(user.password);
    }
    
}

export default new signIn();