import { Then } from "cucumber";
import amazonApp from "../pageobjects/amazonApp";
import { USER } from "../../utilities/constants";

Then(/^I am redirected to the main page$/, () => {
  amazonApp.isHomepage().should.be.true;
});

Then(/^my name is visible on top of page$/, () => {
  amazonApp.getloggerUserName().should.equal(USER.name);
});

Then(/^my name is not visible on top of page$/, () => {
  amazonApp.getloggerUserName().should.equal("Sign In");
});

Then(/^my cart shows those products$/, () => {});

Then(/^the import is "([^"]*)?"$/, () => {});
