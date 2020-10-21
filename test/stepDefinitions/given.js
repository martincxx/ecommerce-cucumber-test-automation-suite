import { Given } from "cucumber";
import amazonApp from "../pageobjects/amazonApp";

import { TODO_ARRAY, MARK_COMPLETED } from "../../utilities/constants";

Given(/^I am not logged in$/, function () {
  amazonApp.open("/");
  //todoApp.createMultipleTodo(TODO_ARRAY);
});

Given(/^I am on the log in page$/, function () {
  amazonApp.signInCreateAccount();
});
