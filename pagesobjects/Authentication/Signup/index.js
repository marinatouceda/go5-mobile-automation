import Selectors from './selectors';
import BasePage from '../../BasePage';

import {By, until} from 'selenium-webdriver';


class Signup extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}	

 	sendUsername (username) {
 		this.driver.findElement (By.css(Selectors.inputEmail)).sendKeys(username);
 	}

 	sendPassword (password) {
		this.driver.findElement(By.css(Selectors.inputPassword)).sendKeys(password);
 	}

 	checkTermsAndConditions(){
 		return this.clickear (Selectors.termsAndConditions)
 	}

 	pressGoButton () {
 		this.driver.findElement(By.css(Selectors.goButton)).click();
 	}

 	signup (username,password) {
 		//this.sendUsername(username);
 		this.sendPassword(password);
 		this.checkTermsAndConditions();
 		this.pressGoButton();		
 	 }
}
export default Signup;
