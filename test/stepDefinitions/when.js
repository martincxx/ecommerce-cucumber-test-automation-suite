import { When } from "cucumber";
import amazonApp from "../pageobjects/amazonApp";
import registerAccount from "../pageobjects/registerAccount";
import { USER } from  "../../utilities/constants"

When(/^I create my account$/, () => {
  amazonApp.createNewAccount();
  registerAccount.createAccount(USER);
});


