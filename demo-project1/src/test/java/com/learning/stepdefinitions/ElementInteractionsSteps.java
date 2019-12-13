package com.learning.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.learning.hooks.AllHooks;
import com.learning.webdriver.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ElementInteractionsSteps{
	WebElement emailElement;
	WebElement loginButtonElement;
	WebElement monthDropdownElement;
	public WebDriver webDriver;
	

	@Before
	public void setUp() {
		System.out.println("Before hook");
		webDriver = BaseClass.getInstance().getWebDriver();
	}
	
	@After
	public void tearDown() {
		System.out.println("After hook");
		webDriver.quit();
	}
	

	@Given("User is on the facebook page")
	public void user_is_on_the_facebook_page() throws InterruptedException {

		webDriver.get("http://www.facebook.com");

	}

	@When("User enters data in text field")
	public void user_enters_data_in_text_field() throws InterruptedException {
		emailElement = webDriver.findElement(By.id("email"));

		emailElement.sendKeys("xyz@gmail.com");

		Thread.sleep(3000);
	}

	@Then("Text should be visible in the text field")
	public void text_should_be_visible_in_the_text_field() {

		System.out.println("Text is :" + emailElement.getText());
		emailElement.clear();
		System.out.println(emailElement.getText());

	}

	@When("User clicks the button")
	public void user_clicks_the_button() throws InterruptedException {
		loginButtonElement = webDriver.findElement(By.id("u_0_l"));

		loginButtonElement.click();

		Thread.sleep(3000);

	}

	@Then("Button should get clicked")
	public void button_should_get_clicked() {
		System.out.println("Button got clicked");

	}

	@When("User selects a value from the dropdown")
	public void user_selects_a_value_from_the_dropdown() throws InterruptedException {
		webDriver.navigate().to("https://en-gb.facebook.com/r.php");
		Thread.sleep(3000);
		
		monthDropdownElement = webDriver.findElement(By.id("month"));

		Select monthSelection = new Select(monthDropdownElement);

		monthSelection.selectByIndex(2);

		Thread.sleep(3000);

		monthSelection.selectByValue("6");
		Thread.sleep(3000);

		monthSelection.selectByVisibleText("Dec");
		Thread.sleep(3000);

	}

	@Then("Value should get selected in dropdown")
	public void value_should_get_selected_in_dropdown() {
		System.out.println("Value got selected in dropdown");
	}

}
