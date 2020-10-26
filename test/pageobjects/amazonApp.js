import Page from "./page"

class amazonApp extends Page{
    
    get search(){ return $("#root > div > main > div > ul.filter > li:nth-child(1) > form > input")}
    get signIn() {return $("#root > div > header > div.header-links > a:nth-child(2)")}
    get createAccount () { return $("#root > div > main > div > div > form > ul > li:nth-child(7) > a");}
    get cart() {return $("#root > div > header > div.header-links > a:nth-child(1)");}
    get amazona(){return $("#root > div > header > div.brand > a");}
    get logOut() {return $("#root > div > main > div > div > div.profile-info > div > form > ul > li:nth-child(7) > button");}
    open(url) {
        super.open(url);
      }
    
    signInCreateAccount(){
      this.signIn.waitForEnabled();
      this.signIn.click();
    }

    createNewAccount(){
      this.createAccount.waitForEnabled();
      this.createAccount.click();

    }

    isHomepage(){
      return this.search.isExisting();
    }

    getloggerUserName(){
      this.cart.waitForEnabled();
      this.cart.click();
      this.amazona.click();
      browser.pause(4000);
      return this.signIn.getText().trim();
    }

    getUserProfile(){
      this.signIn.waitForEnabled();
      this.signIn.click();
    }

}

export default new amazonApp();