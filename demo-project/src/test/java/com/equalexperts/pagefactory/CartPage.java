package com.equalexperts.pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {

	
	public CartPage(WebDriver webDriver) {
		PageFactory.initElements(webDriver, this);

	}
	
	@FindBy(xpath = "/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div/div/div/div/h1")
	private WebElement addedToCartEle;
	
	
	
	public String getAddedSuccessText() {
		return addedToCartEle.getText();
	}
	
}
