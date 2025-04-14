Feature: Cart Page

  Scenario: Add product to cart
    Given I open the main page
    When I click on the first product card
    And I add the product to the cart
    Then I go to the cart page
    And I should see the product in the cart
