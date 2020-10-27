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
  const userInfo = registerAccount.getUserCookies();
  amazonApp.open("/");
  browser.addCookie(userInfo);
  browser.pause(2000);
});

Given(/^I am logged in on the site$/, function () {
  amazonApp.open("/");
  browser.pause(3000);
});
