$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/functionalfeatures/bookingfromapi.feature");
formatter.feature({
  "name": "User should be able to View , Create and Delete Bookings using API calls",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get all bookings using GET call",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ApiTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Get URI",
  "keyword": "Given "
});
formatter.match({
  "location": "AllAPISteps.i_have_Get_URI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a Get call",
  "keyword": "When "
});
formatter.match({
  "location": "AllAPISteps.i_make_a_Get_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should have 200 status code",
  "keyword": "Then "
});
formatter.match({
  "location": "AllAPISteps.response_should_have_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Respose should be of Json type",
  "keyword": "And "
});
formatter.match({
  "location": "AllAPISteps.respose_should_be_of_Json_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all bookings present in the system",
  "keyword": "And "
});
formatter.match({
  "location": "AllAPISteps.i_should_get_all_bookins_present_in_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a booking using POST call",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ApiTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have POST URI",
  "keyword": "Given "
});
formatter.match({
  "location": "AllAPISteps.i_have_POST_URI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have booking data in the jsonfile \"conf/testdata/newbooking.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "AllAPISteps.i_have_booking_data_in_the_jsonfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a post request with the json file",
  "keyword": "When "
});
formatter.match({
  "location": "AllAPISteps.i_make_a_post_request_with_the_json_file()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should have 200 status code",
  "keyword": "Then "
});
formatter.match({
  "location": "AllAPISteps.response_should_have_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Respose should be of Json type",
  "keyword": "And "
});
formatter.match({
  "location": "AllAPISteps.respose_should_be_of_Json_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New Booking should get created successfully",
  "keyword": "And "
});
formatter.match({
  "location": "AllAPISteps.new_Booking_should_get_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/functionalfeatures/bookingswebpage.feature");
formatter.feature({
  "name": "Booking Creation and Deletion",
  "description": "\tUser should be allowed to create a booking from web page with valid set of input data\n\tUser should be allowed to delete any particular booking from web page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "\tUser should we allowed to create a new booking with valid set of data in all fields ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTests"
    }
  ]
});
formatter.step({
  "name": "User is on booking page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cfirstname\u003e\" in firstname field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003csurname\u003e\" in surname field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cprice\u003e\" in Price field",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cdepositpaid\u003e\" in deposit field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cfromdate\u003e\" in checkin field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ctodate\u003e\" in checkout field",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "name": "Booking should get created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "surname",
        "price",
        "depositpaid",
        "fromdate",
        "todate"
      ]
    },
    {
      "cells": [
        "fcname22",
        "scname2",
        "12.5",
        "false",
        "2019-10-28",
        "2019-10-29"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "\tUser should we allowed to create a new booking with valid set of data in all fields ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "AllWebDriverSteps.user_is_on_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"fcname22\" in firstname field",
  "keyword": "When "
});
formatter.match({
  "location": "AllWebDriverSteps.user_enters_in_firstname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"scname2\" in surname field",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_enters_in_surname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12.5\" in Price field",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_enters_in_Price_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"false\" in deposit field",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_selects_in_deposit_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"2019-10-28\" in checkin field",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_enters_in_checkin_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"2019-10-29\" in checkout field",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_enters_in_checkout_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Booking should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "AllWebDriverSteps.user_should_get_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "\tTest booking creation functionality with different input combinations ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTests"
    }
  ]
});
formatter.step({
  "name": "booking data is presnt in the row \u003cRowNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on booking page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters data into fields",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "name": "Booking creation status should be as expected",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "RowNumber"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "\tTest booking creation functionality with different input combinations ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "booking data is presnt in the row 1",
  "keyword": "Given "
});
formatter.match({
  "location": "AllWebDriverSteps.booking_data_is_presnt_in_the_row(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on booking page",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_is_on_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters data into fields",
  "keyword": "When "
});
formatter.match({
  "location": "AllWebDriverSteps.user_enters_data_into_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Booking creation status should be as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "AllWebDriverSteps.booking_creation_status_should_be_as_expected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "\tTo test deletion of a booking present at the top of the table ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "AllWebDriverSteps.user_is_on_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is atleast one booking in bookings page",
  "keyword": "And "
});
formatter.match({
  "location": "AllWebDriverSteps.there_is_atleast_one_booking_in_bookings_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks delete button of the booking present at the top",
  "keyword": "When "
});
formatter.match({
  "location": "AllWebDriverSteps.user_clicks_delete_button_of_the_booking_present_at_the_top()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Booking should get deleated",
  "keyword": "Then "
});
formatter.match({
  "location": "AllWebDriverSteps.booking_should_get_deleated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});