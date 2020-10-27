import Page from "./page";

class registerAccount extends Page {
  get name() {
    return $("#name");
  }

  get email() {
    return $("#email");
  }

  get password() {
    return $("#password");
  }

  get rePassword() {
    return $("#rePassword");
  }

  get register() {
    return $(
      "#root > div > main > div > div > form > ul > li:nth-child(7) > button"
    );
  }
  get accountForm() {
    return $("#root > div > main > div > div > form > ul");
  }

  open(url) {
    super.open(url);
  }

  getUserCookies() {
    const cookie = browser.getNamedCookie("userInfo");
    return cookie;
  }

  createAccount(user) {
    this.accountForm.waitForEnabled();
    this.name.setValue(user.name);
    this.email.setValue(user.email);
    this.password.setValue(user.password);
    this.rePassword.setValue(user.password);
    this.register.click();
    browser.pause(2000);
  }
}

export default new registerAccount();
