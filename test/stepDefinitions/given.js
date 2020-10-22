import { Given } from "cucumber";
import amazonApp from "../pageobjects/amazonApp";
import signIn from "../pageobjects/signIn";

import { USER } from "../../utilities/constants";
import registerAccount from "../pageobjects/registerAccount";

Given(/^I am not logged in$/, function () {
  amazonApp.open("/");
});

Given(/^I am on the log in page$/, function () {
  amazonApp.signInCreateAccount();
});

Given(/^I log in with valid credentials$/, function () {
  let userInfo = registerAccount.getUserCookies();  
  amazonApp.open("/");
  browser.addCookie(userInfo)
  browser.pause(5000)
});
