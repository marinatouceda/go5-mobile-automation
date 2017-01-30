import Selectors from './selectors';
import BasePage from '../../BasePage';

import {By, until} from 'selenium-webdriver';


class ForgotPassword extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

 	sendUsername (username) {
 		this.driver.findElement (By.id(Selectors.inputEmail)).sendKeys(username);
 	}

 	sendPassword (password) {
		this.driver.findElement(By.id(Selectors.inputPassword)).sendKeys(password);
 	} 	

 	pressGoButton () {
 		this.driver.findElement(By.css(Selectors.goButton)).click();
 	}

 	verifyErrorMessage (){
    	error = this.driver.findElement(mensajeError).getText();	  	 
   		 Assert.assertEquals(text,"El email ingresado no se encuentra registrado. Por favor vuelve a intentarlo");
      }

    clickReturn () {
      	this.waitForDisplayed(Selectors.return,5000)
			.then(() => {
				return this.clickear (Selectors.return);
			})      	
    }
    openForgotPage () {
      	this.waitForDisplayed(Selectors.forgotLinkWithToken,8000)
			.then(() => {
				return this.clickear (Selectors.forgotLinkWithToken);
			})      	
    }

 	remember (username) {
 		this.sendUsername(username); 		
 		this.pressGoButton();		
 	 }
 	 	
 	 runScriptForgot () {
 	 	return this.driver.executeScript("$(document).ajaxComplete(function( event, xhr, settings ) { $('button.optional').after('<a class=\"forgot-pass-link\" href=\"/authentication/reset-password/'+$.parseJSON(xhr.responseText).data.id+'\">Forgot Link!</a>'); });");
 	 }
}
export default ForgotPassword;
