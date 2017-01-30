import Selectors from './selectors';
import BasePage from '../../BasePage';

import {By, until} from 'selenium-webdriver';


class LoginPage extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

	isLoaded () {
		//return this.driver.wait(until.elementLocated(By.id('ember759')),30000);
		return super.waitForDisplayed(goButtonLogin, 50000);
	}

 	sendUsername (username) {
 		this.driver.findElement (By.css(inputEmail)).sendKeys(username);
 	}

 	sendPassword (password) {
		this.driver.findElement(By.css(inputPassword)).sendKeys(password);
 	}

 	pressLoginButton () {
 		this.driver.findElement(By.css(goButtonLogin)).click();
 	}

 	login (username,password) {
 		this.sendUsername(username);
 		this.sendPassword(password);
 		this.pressLoginButton();
 		return this.driver.wait(until.elementLocated(By.css(home)),50000);
 	 }
}
export default LoginPage;
