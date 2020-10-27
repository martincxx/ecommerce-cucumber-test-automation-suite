@t @uat @p @placeOrder
Feature: Account
    As a visitor of the ecommerce website
    I want to be able order products
    So that my get my products


    Background: User with an account and logged in
        Given I am not logged in
        And I am on the log in page
        When I create my account
        Then I am redirected to the main page
        And my name is visible on top of page

    @shop01
    Scenario:
        Given I am logged in on the site
        When I add "2" "Adidas Classic Pants"
        Then my cart shows those products
        And the import is "$130"
