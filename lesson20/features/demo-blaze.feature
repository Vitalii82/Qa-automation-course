Feature: Demoblaze UI

  Scenario: 01 - Main page - header and footer are visible
    Given I open the main page
    Then I should see the header
    And I should see the footer

  Scenario: 02 - Main page - product cards are visible
    Given I open the main page
    Then I should see product cards

  Scenario: 03 - Main page - navigate to product page by clicking card
    Given I open the main page
    When I click on the first product card
    Then I should be on the product page

  Scenario: 04 - Product page - add product to cart
    Given I open the main page
    When I click on the first product card
    And I add the product to the cart
    Then I should see a confirmation alert

  Scenario: 05 - Cart page - verify product in cart
    Given I open the cart page
    Then I should see a product in the cart
