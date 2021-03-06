import BasePage from './BasePage';
const	goButtonLogin = 'label:last-child .primary';
const	inputEmail = 'label:nth-child(3) input';
const	inputPassword = 'label:nth-child(4) input';
const 	home = '.space:first-child .igohomewhite';
const  forgot = '.signup .link';
const   inputPost = '.postbox';

import {By, until} from 'selenium-webdriver';


// Me traigo el driver de la  BasePage

class LoginPage extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

	isLoaded () {
		 this.driver.manage().window().maximize();
		return this.waitForDisplayed(goButtonLogin, 50000);
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
 	goToForgotPassword () {
 		return this.clickear (forgot);
 	}

 	login (username,password) {

 		this.sendUsername(username);
 		this.sendPassword(password);
 		this.pressLoginButton();
 		return this.driver.wait(until.elementLocated(By.css(home)),50000);
 	 	}
}
export default LoginPage;
