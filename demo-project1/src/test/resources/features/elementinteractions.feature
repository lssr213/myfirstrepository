Feature: All Selenium element interactions

  @WebTests
  Scenario: To test Text field interaction
    Given User is on the facebook page
    When User enters data in text field
    Then Text should be visible in the text field

  @WebTests
  Scenario: To test Button interaction
    Given User is on the facebook page
    When User clicks the button
    Then Button should get clicked

  @WebTests
  Scenario: To test Dropdown interaction
    Given User is on the facebook page
    When User selects a value from the dropdown
    Then Value should get selected in dropdown
