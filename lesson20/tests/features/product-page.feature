Feature: Product Page

  Scenario: Open product page
    Given I open the main page
    When I click on the first product card
    Then I should be navigated to the product page
