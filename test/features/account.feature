@t @uat @p @account
Feature: Account
    As a visitor of the ecommerce website
    I want to be able to see and update my account details
    So that my details for ordering and delivery are correct

    @acc01
    Scenario: acc01 - Sign in
        Given I am not logged in
        And I am on the log in page
        When I create my account
        Then I am redirected to the main page
        And my name is visible on top of page


    @acc02
    Scenario: acc02 - Login
        Given I am not logged in
        And I am on the log in page
        When I log in with valid credentials
        Then I am redirected to the main page
        And my name is visible on top of page

    @acc03
    Scenario: acc03 - Logout
        Given I am logged in on the site
        When I click the Log out button
        Then I receive feedback that I am logged out
        And I cannot visit my account page anymore

    @acc04
    Scenario: acc04 - Check orders
        Given I am logged in on the site
        When I navigate to my orders
        Then I see a list of my orders
        And I can open an order to see the order details

    @acc05
    Scenario: acc05 - Edit account
        Given I am logged in on the site
        When I navigate to the personal information page
        And I update my details
        Then my profile details

    @acc06
    Scenario: acc06 - Change address
        Given I am logged in on the site
        When I navigate to the personal information page
        And I change my street name
        Then I receive feedback that my account is updated