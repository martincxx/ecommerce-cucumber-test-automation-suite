import Page from "./page"

class amazonApp extends Page{
    
    get search(){ return $("#root > div > main > div > ul.filter > li:nth-child(1) > form > input")}
    get signIn() {return $("#root > div > header > div.header-links > a:nth-child(2)")}
    get createAccount () { return $("#root > div > main > div > div > form > ul > li:nth-child(7) > a");}
    get cart() {return $("#root > div > header > div.header-links > a:nth-child(1)");}
    get amazona(){return $("#root > div > header > div.brand > a");}
    
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
      return this.signIn.getText().trim();
    }
}

export default new amazonApp();