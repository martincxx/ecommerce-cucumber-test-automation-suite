import { Then } from "cucumber";
import amazonApp from "../pageobjects/amazonApp";
import { USER } from  "../../utilities/constants";

Then(/^I am redirected to the main page$/, () => {
  amazonApp.isHomepage().should.be.true;
});

Then(/^my name is visible on top of page$/, () => {
  amazonApp.getloggerUserName().should.equal(USER.name);
});
